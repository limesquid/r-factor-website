/* eslint-disable max-statements, max-depth, max-len */
const express = require('express');
const uuidv1 = require('uuid/v1');
const licensesDb = require('../../database/licenses-db');
const logger = require('../../logger');
const { generateLicence, validateClientData } = require('./utils');
const { createPayment, validatePayment } = require('./payu');
const sendPaymentConfirmation = require('./send-payment-confirmation');
const {
  PAYMENT_NOT_COMPLETED_ERROR_MESSAGE,
  WRONG_PAYMENT_ID_ERROR_MESSAGE
} = require('./constants');

const createNewPayment = async (request, response) => {
  const { address, companyName, fullName, email, isCompany, vatin } = request.body;
  const validationErrors = validateClientData({ address, companyName, fullName, email, isCompany, vatin });

  if (validationErrors.length > 0) {
    response.status(400).send(validationErrors.join('\n\n'));
    return;
  }

  const internalOrderId = uuidv1();
  const customerIp = request.header('x-forwarded-for') || request.connection.remoteAddress;
  const [ firstName, lastName ] = fullName.split(' ');
  const buyer = { address, email, firstName, lastName };

  try {
    let payment = null;

    try {
      payment = await createPayment({ internalOrderId, customerIp, buyer });
      console.log(payment);
    } catch (error) {
      logger.log('error', `[Create Payment] Error while creating PayU payment: ${error}`);
      throw error;
    }

    try {
      licensesDb.create({
        address,
        companyName,
        email,
        fullName,
        internalOrderId,
        externalOrderId: payment.orderId,
        paymentMethod: 'payu',
        vatin
      });
    } catch (error) {
      logger.log('error', `[Create Payment: ${internalOrderId}]: Error while writing payment details to database: ${error}`);
      throw error;
    }

    logger.log('info', `[Create Payment: ${internalOrderId}]: Payment created and written to database (internalOrderId: ${internalOrderId}, payuOrderId: ${payment.orderId})`);

    response.send({
      redirectUri: payment.redirectUri
    });
  } catch (error) {
    response.status(500).send(String(error));
  }
};

const completePayment = async (request, response) => {
  const { internalOrderId } = request.body;
  const licenseDetails = licensesDb.getByPaymentId(internalOrderId);

  if (!internalOrderId || !licenseDetails) {
    response.status(404).send(WRONG_PAYMENT_ID_ERROR_MESSAGE);
    return;
  }

  if (licenseDetails.status === 'paid') {
    response.status(410).send('Operation has been already completed. This page is reachable only once.');
    return;
  }

  const loggerPrefix = `[Complete-Ppayment: ${internalOrderId}]:`;

  try {
    try {
      const isPaymentCompleted = await validatePayment(licenseDetails.externalOrderId);
      if (!isPaymentCompleted) {
        logger.log('error', '${loggerPrefix} Requesting license key while payment is not completed');
        response.send(403).send(PAYMENT_NOT_COMPLETED_ERROR_MESSAGE);
        return;
      }
    } catch (error) {
      logger.log('error', `${loggerPrefix} Error while validating payment: ${error}`);
      throw error;
    }

    const { address, companyName, email, fullName, vatin } = licenseDetails;
    const licenseKey = generateLicence({ fullName, email });

    const paymentParams = JSON.stringify({ address, companyName, email, fullName, vatin, licenseKey });
    logger.log('info', `${loggerPrefix} Payment completed and license generated with params: ${paymentParams}`);

    try {
      licensesDb.setLicenseKey(internalOrderId, licenseKey);
    } catch (error) {
      logger.log('rrror', `${loggerPrefix} Error while writing generated license key to database: ${error}`);
    }

    try {
      sendPaymentConfirmation({ address, companyName, email, fullName, licenseKey, vatin });
    } catch (error) {
      logger.log('error', `${loggerPrefix} Error while sending confirmation email to user`);
    }

    response.send({ licenseKey });
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = express.Router()
  .post('/complete-payment', completePayment)
  .post('/create-payment', createNewPayment);

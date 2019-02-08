/* eslint-disable max-statements, max-depth, max-len */
const uuidv1 = require('uuid/v1');
const { licensesDb } = require('../../database');
const logger = require('../../logger');
const { validateClientData } = require('./utils');
const { createPayment } = require('./payu');
const { PAYMENT_CREATION_ERROR_MESSAGE } = require('./constants');

const createNewPayment = async (request, response) => {
  const { address, companyName, fullName, email, isCompany, countryCode, vatin } = request.body;
  const validationErrors = validateClientData({ address, companyName, countryCode, fullName, email, isCompany, vatin });

  if (validationErrors.length > 0) {
    response.status(400).send(validationErrors.join('\n\n'));
    return;
  }

  const internalOrderId = uuidv1();
  const customerIp = request.ip;
  const buyer = { address, email, firstName: fullName };

  try {
    let payment = null;

    try {
      payment = await createPayment({ internalOrderId, countryCode, customerIp, buyer });
    } catch (error) {
      logger.log('error', `[Create Payment] Error while creating PayU payment: ${error}`);
      throw error;
    }

    try {
      licensesDb.create({
        address,
        companyName,
        countryCode,
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
    response.status(500).send(PAYMENT_CREATION_ERROR_MESSAGE);
  }
};

module.exports = createNewPayment;

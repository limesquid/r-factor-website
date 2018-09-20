/* eslint-disable max-statements, max-depth, max-len */
const licensesDb = require('../../database/licenses-db');
const logger = require('../../logger');
const { generateLicense } = require('./utils');
const { validatePayment } = require('./payu');
const sendPaymentConfirmation = require('./send-payment-confirmation');
const {
  PAYMENT_VALIDATION_ERROR_MESSAGE,
  PAYMENT_NOT_COMPLETED_ERROR_MESSAGE,
  WRONG_PAYMENT_ID_ERROR_MESSAGE
} = require('./constants');

const completePayment = async (request, response) => {
  const { internalOrderId } = request.body;
  const licenseDetails = licensesDb.getByPaymentId(internalOrderId);

  if (!internalOrderId || !licenseDetails) {
    logger.log('error', `[Complete-Payment: ${internalOrderId}]: unknown internalOrderId`);
    response.status(404).send(WRONG_PAYMENT_ID_ERROR_MESSAGE);
    return;
  }

  if (licenseDetails.status === 'paid') {
    logger.log('error', `[Complete-Payment: ${internalOrderId}]: operation has already been completed`);
    response.status(410).send('Operation has already been completed. This page is reachable only once.');
    return;
  }

  const loggerPrefix = `[Complete Payment: ${internalOrderId}]:`;

  try {
    try {
      const isPaymentCompleted = await validatePayment(licenseDetails.externalOrderId);
      if (!isPaymentCompleted) {
        logger.log('error', `${loggerPrefix} Requesting license key while payment is not completed`);
        response.send(403).send(PAYMENT_NOT_COMPLETED_ERROR_MESSAGE);
        return;
      }
    } catch (error) {
      logger.log('error', `${loggerPrefix} Error while validating payment: ${error}`);
      throw new Error(PAYMENT_VALIDATION_ERROR_MESSAGE);
    }

    const { address, companyName, email, fullName, vatin } = licenseDetails;
    const licenseKey = generateLicense({ fullName, email });

    const paymentParams = JSON.stringify({ address, companyName, email, fullName, vatin, licenseKey });
    logger.log('info', `${loggerPrefix} Payment completed and license generated with params: ${paymentParams}`);

    try {
      licensesDb.setLicenseKey(internalOrderId, licenseKey);
    } catch (error) {
      logger.log('error', `${loggerPrefix} Error while writing generated license key to database: ${error}`);
    }

    try {
      sendPaymentConfirmation({ address, companyName, email, fullName, licenseKey, vatin });
    } catch (error) {
      logger.log('error', `${loggerPrefix} Error while sending confirmation email to user`);
    }

    response.send({ licenseKey });
  } catch (error) {
    response.status(500).send(PAYMENT_VALIDATION_ERROR_MESSAGE);
  }
};

module.exports = completePayment;

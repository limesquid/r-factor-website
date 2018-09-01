const express = require('express');
const { generateLicence, validateClientData, validatePayment } = require('./utils');
const { createPayment } = require('./paypal');
const licensesDb = require('../../database/licenses-db');
const sendPaymentConfirmation = require('./send-payment-confirmation');
const {
  PAYMENT_CREATION_ERROR_MESSAGE
} = require('./constants');

const createNewPayment = async (request, response) => {
  const { address, companyName, fullName, email, isCompany, vatin } = request.body;
  const validationErrors = validateClientData({ address, companyName, fullName, email, isCompany, vatin });
  if (validationErrors.length > 0) {
    response.status(400).send(validationErrors.join('\n\n'));
    return;
  }

  try {
    const payment = await createPayment();
    licensesDb.create({
      address,
      companyName,
      email,
      fullName,
      paymentId: payment.id,
      paymentMethod: 'paypal',
      vatin
    });

    response.send({
      paymentId: payment.id
    });
  } catch (error) {
    response.status(500).send(PAYMENT_CREATION_ERROR_MESSAGE);
  }
};

const completePayment = async (request, response) => {
  const { paymentId } = request.body;
  const licenseDetails = licensesDb.getByPaymentId(paymentId);
  if (!paymentId || !licenseDetails) {
    response.status(404).send('Wrong payment id');
    return;
  }

  try {
    await validatePayment(paymentId);
  } catch (error) {
    response.send(500).send(error);
  }

  const { address, companyName, email, fullName, vatin } = licenseDetails;
  const licenseKey = generateLicence({ fullName, email });
  licensesDb.setLicenseKey(paymentId, licenseKey);
  sendPaymentConfirmation({ address, companyName, email, fullName, licenseKey, vatin });
  response.send({ licenseKey });
};

module.exports = express.Router()
  .post('/complete-payment', completePayment)
  .post('/create-payment', createNewPayment)
  .get('/aaa', (req, res) => {
    const l = generateLicence({
      fullName: 'R-Factor',
      email: 'r.factor.js@gmail.com'
    });
    res.send(l);
  });

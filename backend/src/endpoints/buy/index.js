const express = require('express');
const { generateLicence } = require('./utils');
const { createPayment } = require('./paypal');
const licensesDb = require('../../utils/licenses-db');
const sendPaymentConfirmation = require('./send-payment-confirmation');

const createNewPayment = async (request, response) => {
  const payment = await createPayment();
  const { address, companyName, fullName, email, vatin } = request.body;

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
};

const completePayment = (request, response) => {
  const { paymentId } = request.body;
  const licenseDetails = licensesDb.getByPaymentId(paymentId);
  if (!paymentId || !licenseDetails) {
    response.status(404).send('Wrong payment id');
    return;
  }
  const { address, companyName, email, fullName, vatin } = licenseDetails;
  const licenseKey = generateLicence({ fullName, email });
  licensesDb.setLicenseKey(paymentId, licenseKey);
  sendPaymentConfirmation({ address, companyName, email, fullName, licenseKey, vatin });
  response.send({ licenseKey });
};

module.exports = express.Router()
  .post('/complete-payment', completePayment)
  .post('/create-payment', createNewPayment);

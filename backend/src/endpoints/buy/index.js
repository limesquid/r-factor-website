const express = require('express');
const { generateLicence } = require('./utils');
const { createPayment } = require('./paypal');
const licensesDb = require('../../utils/licenses-db');

const createNewPayment = async(request, response) => {
  const payment = await createPayment();
  const { fullName, email } = request.body;

  licensesDb.create({
    paymentId: payment.id,
    paymentMethod: 'paypal',
    fullName,
    email
  });

  response.send({
    paymentId: payment.id
  });
};

const completePayment = (request, response) => {
  const { paymentId } = request.body;
  const { fullName, email } = licensesDb.getByPaymentId(paymentId);
  const licenseKey = generateLicence({ fullName, email });
  licensesDb.setLicenseKey(paymentId, licenseKey);
  response.send({ licenseKey });
};

module.exports = express.Router()
  .post('/complete-payment', completePayment)
  .post('/create-payment', createNewPayment);

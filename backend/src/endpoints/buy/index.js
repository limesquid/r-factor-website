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
  const licenseDetails = licensesDb.getByPaymentId(paymentId);
  if (!paymentId || !licenseDetails) {
    response.status(404).send('Wrong payment id');
    return;
  }
  const { fullName, email } = licenseDetails;
  const licenseKey = generateLicence({ fullName, email });
  licensesDb.setLicenseKey(paymentId, licenseKey);
  response.send({ licenseKey });
};

module.exports = express.Router()
  .post('/complete-payment', completePayment)
  .post('/create-payment', createNewPayment);

const express = require('express');
const { generateLicence } = require('./utils');
const { createPayment } = require('./paypal');

const createNewPayment = async(request, response) => {
  const payment = await createPayment();
  response.send({
    id: payment.id
  });
};

const postGenerateLicence = (request, response) => {
  const { fullname, email } = request.body;
  response.send(generateLicence({ fullname, email }));
};

module.exports = express.Router()
  .post('/generate', postGenerateLicence)
  .post('/create-payment', createNewPayment);

/* eslint-disable max-statements, max-depth, max-len */
const express = require('express');
const completePayment = require('./complete-payment');
const createPayment = require('./create-payment');

module.exports = express.Router()
  .post('/complete-payment', completePayment)
  .post('/create-payment', createPayment);

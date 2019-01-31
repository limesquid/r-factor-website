/* eslint-disable max-statements, max-depth, max-len */
const express = require('express');
const moment = require('moment-business-days');
const completePayment = require('./complete-payment');
const createPayment = require('./create-payment');
const generateInvoicePdf = require('./generate-invoice-pdf');
const { getUsdRate } = require('../../utils/currency-rates');

module.exports = express.Router()
  .post('/complete-payment', completePayment)
  .post('/create-payment', createPayment);

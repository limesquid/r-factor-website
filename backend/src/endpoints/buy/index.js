/* eslint-disable max-statements, max-depth, max-len */
const express = require('express');
const moment = require('moment-business-days');
const completePayment = require('./complete-payment');
const createPayment = require('./create-payment');
const generateInvoicePdf = require('./generate-invoice-pdf');
const { getUsdRate } = require('../../utils/currency-rates');

module.exports = express.Router()
  .post('/complete-payment', completePayment)
  .post('/create-payment', createPayment)
  .get('/create-invoice', async (request, response) => {
    const { address, companyName, fullName, email, isCompany, isPolishCustomer, vatin } = request.query;
    const date = moment().prevBusinessDay().format('YYYY-MM-DD');
    const usdRate = await getUsdRate(date);
    const pdf = await generateInvoicePdf({
      address,
      companyName,
      fullName,
      email,
      isCompany,
      isPolishCustomer,
      usdRate,
      vatin
    });
    response.setHeader('Content-Type', 'application/pdf');
    response.end(new Buffer(pdf, 'binary'), 'binary');
  });

/* eslint-disable camelcase */

const https = require('https');
const moment = require('moment');
const { GENERATE_INVOICE_ERROR_MESSAGE } = require('./constants');

module.exports = ({ address, companyName, fullName, vatin }) => new Promise((resolve, reject) => {
  const invoice = createInvoicePayload({ address, companyName, fullName, vatin });
  const postData = JSON.stringify(invoice);
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    hostname: 'invoice-generator.com',
    method: 'POST',
    path: '/',
    port: 443
  };

  const chunks = [];
  const reqest = https.request(options, (response) => {
    response.on('data', (chunk) => chunks.push(chunk));
    response.on('end', () => {
      const invoicePdf = Buffer.concat(chunks);
      resolve(invoicePdf);
    });
  });
  reqest.on('error', () => reject(new Error(GENERATE_INVOICE_ERROR_MESSAGE)));
  reqest.write(postData);
  reqest.end();
});

const createInvoicePayload = ({ address, companyName, fullName, invoiceNumber, vatin }) => {
  const date = moment().format('YYYY-MM-DD');

  return {
    date,
    fields: {
      tax_title: 'VAT'
    },
    from: [
      process.env.COMPANY_NAME,
      process.env.COMPANY_ADDRESS,
      `VATIN: ${process.env.COMPANY_ID}`
    ].join('\n'),
    items: [
      {
        name: 'R-Factor',
        quantity: 1,
        unit_cost: process.env.LICENSE_FEE
      }
    ],
    number: invoiceNumber,
    payment_terms: 'Charged - Do Not Pay',
    tax: 0,
    terms: 'No need to submit payment. You will be auto-billed for this invoice.',
    to: companyName
      ? `${companyName},\n${address}\nVATIN / NIP:${vatin}`
      : `${fullName},\n${address}`
  };
};

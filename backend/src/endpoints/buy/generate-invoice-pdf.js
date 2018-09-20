/* eslint-disable camelcase */

const https = require('https');
const moment = require('moment');
const licensesDb = require('../../database/licenses-db');
const { GENERATE_INVOICE_ERROR_MESSAGE } = require('./constants');

module.exports = ({ address, companyName, vatin, fullName }) => new Promise((resolve, reject) => {
  const invoice = createInvoicePayload({ address, companyName, vatin, fullName });
  const postData = JSON.stringify(invoice);
  const options = {
    hostname: 'invoice-generator.com',
    port: 443,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
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

const createInvoicePayload = ({ address, companyName, vatin, fullName }) => {
  const licenseNumber = licensesDb.getLicensesByDate(new Date()).length + 1;
  const date = moment().format('YYYY-MM-DD');
  const invoiceNumber = `${moment().format('YYYY/MM')}/${licenseNumber}`;

  return {
    date,
    from: [
      process.env.COMPANY_NAME,
      process.env.COMPANY_ADDRESS,
      `NIP / VATIN: ${process.env.COMPANY_ID}`
    ].join('\n'),
    to: companyName
      ? `${companyName},\n${address}\nVATIN / NIP:${vatin}`
      : `${fullName},\n${address}`,
    number: invoiceNumber,
    payment_terms: 'Charged - Do Not Pay',
    items: [
      {
        name: 'R-Factor',
        quantity: 1,
        unit_cost: process.env.LICENSE_PRICE
      }
    ],
    fields: {
      tax_title: 'VAT'
    },
    tax: 0,
    terms: 'No need to submit payment. You will be auto-billed for this invoice.'
  };
};

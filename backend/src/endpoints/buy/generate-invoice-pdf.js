/* eslint-disable camelcase */

const https = require('https');
const moment = require('moment');
const { GENERATE_INVOICE_ERROR_MESSAGE } = require('./constants');
const {
  getCountryNameByCountryCode,
  shouldIncludeVat,
  shouldReverseCharge
} = require('./utils');

const LICENSE_FEE = parseFloat(process.env.LICENSE_FEE);
const VAT_RATE = parseInt(process.env.VAT_RATE, 10);

module.exports = ({
  address,
  companyName,
  countryCode,
  fullName,
  usdRate,
  vatin
}) => new Promise((resolve, reject) => {
  const invoice = createInvoicePayload({ address, companyName, fullName, countryCode, usdRate, vatin });
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

const createCustomerDetails = ({ address, companyName, country, fullName, vatin }) => {
  if (!companyName) {
    return `${fullName},\n${address}, ${country}`;
  }

  if (vatin) {
    return `${companyName},\n${address}, ${country}\nNIP / VAT: ${vatin}`;
  }

  return `${companyName},\n${address}, ${country}`;
};

const createInvoicePayload = ({
  address,
  countryCode,
  companyName,
  fullName,
  invoiceNumber,
  usdRate,
  vatin
}) => {
  const date = moment().format('YYYY-MM-DD');
  const vatInUsd = LICENSE_FEE * (VAT_RATE / 100);
  const country = getCountryNameByCountryCode(countryCode);
  const isVatIncluded = shouldIncludeVat(countryCode);
  const vatInPln = isVatIncluded
    ? (vatInUsd * usdRate).toFixed(2)
    : 'n/a';
  const notes = [];

  if (isVatIncluded) {
    notes.push(`VAT in PLN: ${vatInPln}`);
  }

  if (shouldReverseCharge(countryCode)) {
    notes.push('Reverse charge');
  }

  return {
    date,
    due_date: date,
    tax_title: 'VAT',
    date_title: 'Date of invoice',
    due_date_title: 'Date of delivery/service',
    from: [
      process.env.COMPANY_NAME,
      process.env.COMPANY_ADDRESS,
      // this is on odpierdol (works because there is PL in process.env.COMPANY_ID)
      `NIP / VAT: ${process.env.COMPANY_ID.replace(countryCode, '')}`
    ].join('\n'),
    items: [
      {
        name: 'R-Factor',
        quantity: 1,
        unit_cost: process.env.LICENSE_FEE
      }
    ],
    notes: notes.length
      ? notes.join('\n')
      : undefined,
    number: invoiceNumber,
    payment_terms: 'Charged - Do Not Pay',
    tax: isVatIncluded
      ? process.env.VAT_RATE
      : undefined,
    terms: 'No need to submit payment. You will be auto-billed for this invoice.',
    to: createCustomerDetails({ address, companyName, country, fullName, vatin })
  };
};

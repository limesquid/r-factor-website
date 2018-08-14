/* eslint-disable camelcase */

const https = require('https');
const licensesDb = require('../../utils/licenses-db');

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
  const req = https.request(options, (res) => {
    res.on('data', (chunk) => chunks.push(chunk));
    res.on('end', () => {
      const invoicePdf = Buffer.concat(chunks);
      resolve(invoicePdf);
    });
  });
  req.on('error', reject);
  req.write(postData);
  req.end();
});

const createInvoicePayload = ({ address, companyName, vatin, fullName }) => {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth()).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const licenseNumber = licensesDb.getLicensesByDate(date).length + 1;

  return {
    from: `${process.env.COMPANY_NAME},\n${process.env.COMPANY_ADDRESS},\nNIP / VATIN: ${process.env.COMPANY_ID}`,
    to: companyName
      ? `${companyName},\n${address}\nNIP / VATIN:${vatin}`
      : `${fullName},\n${address}`,
    date: `${year}-${month}-${day}`,
    number: `${year}/${month}/${licenseNumber}`,
    payment_terms: 'Charged - Do Not Pay',
    items: [
      {
        name: 'R-Factor',
        quantity: 1,
        unit_cost: 35
      }
    ],
    fields: {
      tax_title: 'VAT'
    },
    tax: 0,
    terms: 'No need to submit payment. You will be auto-billed for this invoice.'
  };
};

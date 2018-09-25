const btoa = require('btoa');
const sgMail = require('@sendgrid/mail');
const generateInvoicePdf = require('./generate-invoice-pdf');
const { INVOICE_SENDING_ERROR_MESSAGE } = require('./constants');

module.exports = async ({ address, companyName, vatin, email, fullName, licenseKey }) => {
  try {
    const invoicePdf = await generateInvoicePdf({ address, companyName, vatin, fullName });

    const emailJson = {
      from: {
        email: process.env.OUR_EMAIL
      },
      to: email,
      subject: 'R-Factor | License Key',
      text: [
        'Hello,',
        'Thank you for purchasing a copy of R-Factor!',
        `Your license key is:\n${licenseKey}`,
        'Please find your invoice attached.',
        'Best regards,\n\nR-Factor team'
      ].join('\n\n\n'),
      attachments: [
        {
          filename: 'invoice.pdf',
          type: 'application/pdf',
          disposition: 'attachment',
          content: btoa(invoicePdf)
        }
      ]
    };

    return sgMail.send(emailJson);
  } catch (error) {
    throw new Error(`${INVOICE_SENDING_ERROR_MESSAGE}: ${error}`);
  }
};
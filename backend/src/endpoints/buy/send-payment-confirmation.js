const btoa = require('btoa');
const sgMail = require('@sendgrid/mail');
const generateInvoicePdf = require('./generate-invoice-pdf');
const { INVOICE_SENDING_ERROR_MESSAGE } = require('./constants');

module.exports = async ({ email, fullName, invoicePdf, licenseKey }) => {
  try {
    const emailJson = createEmail({ email, fullName, invoicePdf, licenseKey });
    return sgMail.send(emailJson);
  } catch (error) {
    throw new Error(`${INVOICE_SENDING_ERROR_MESSAGE}: ${error}`);
  }
};

const createEmail = ({ email, fullName, invoicePdf, licenseKey }) => {
  const emailJson = {
    bcc: [
      {
        email: process.env.OUR_EMAIL
      }
    ],
    from: {
      email: process.env.OUR_EMAIL
    },
    subject: 'R-Factor | License Key',
    text: [
      `Hello ${fullName},`,
      'Thank you for purchasing a copy of R-Factor!',
      `Your license key is:\n${licenseKey}`,
      'Please find your invoice attached.',
      'Best regards,\n\nR-Factor team'
    ].join('\n\n\n'),
    to: email
  };

  if (invoicePdf) {
    emailJson.attachments = [
      {
        content: btoa(invoicePdf),
        disposition: 'attachment',
        filename: 'invoice.pdf',
        type: 'application/pdf'
      }
    ];
  }

  return emailJson;
};

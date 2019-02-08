const countries = require('./countries');

module.exports = {
  INVALID_ADDRESS_ERROR_MESSAGE: 'Invalid address',
  INVALID_COMPANY_NAME: 'Invalid company name',
  INVALID_EMAIL_ERROR_MESSAGE: 'Invalid email address',
  INVALID_FULL_NAME_ERROR_MESSAGE: 'Invalid full name',
  INVALID_VATIN: 'Invalid VATIN/NIP',
  INVALID_COUNTRY_CODE: 'Invalid country',
  GENERATE_INVOICE_ERROR_MESSAGE: 'Error while generating invoice document',
  PAYMENT_CREATION_ERROR_MESSAGE: 'Error while creating payment',
  PAYMENT_VALIDATION_ERROR_MESSAGE: 'Error while validating payment status',
  PAYMENT_NOT_COMPLETED_ERROR_MESSAGE: 'Payment is not completed',
  INVOICE_SENDING_ERROR_MESSAGE: 'Error while sending invoice',
  WRONG_PAYMENT_ID_ERROR_MESSAGE: 'Wrong payment id',
  VAT_COUNTRY_CODES: [ 'PL' ],
  COUNTRY_CODES: countries.map(({ code }) => code)
};

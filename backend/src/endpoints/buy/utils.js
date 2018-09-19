const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const emailValidator = require('email-validator');
const certificate = require('../../../license/license.key');
const {
  INVALID_ADDRESS_ERROR_MESSAGE,
  INVALID_COMPANY_NAME,
  INVALID_EMAIL_ERROR_MESSAGE,
  INVALID_FULL_NAME_ERROR_MESSAGE,
  INVALID_VATIN
} = require('./constants');

const sha256 = (string) => crypto.createHash('sha256').update(string).digest('hex');

const generateLicense = ({ fullName, email }) => {
  const licenseData = {
    fullName,
    email,
    key: sha256(`${fullName}:${process.env.LICENSE_SECRET}:${email}`)
  };
  return jwt.sign(licenseData, certificate, { algorithm: 'RS256' });
};

const isValidString = (string) => string && typeof string === 'string';

const validateClientData = ({ address, companyName, fullName, email, vatin, isCompany }) => {
  const errors = {
    [INVALID_EMAIL_ERROR_MESSAGE]: !emailValidator.validate(email),
    [INVALID_FULL_NAME_ERROR_MESSAGE]: !isValidString(fullName),
    [INVALID_ADDRESS_ERROR_MESSAGE]: isCompany && !isValidString(address),
    [INVALID_COMPANY_NAME]: isCompany && !isValidString(companyName),
    [INVALID_VATIN]: isCompany && !isValidString(vatin)
  };

  return Object.keys(errors).filter((errorMessage) => Boolean(errors[errorMessage]));
};

module.exports = {
  generateLicense,
  validateClientData
};

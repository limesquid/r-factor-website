const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const emailValidator = require('email-validator');
const certificate = require('../../../license/license.key');
const {
  COUNTRY_CODES,
  EU_COUNTRY_CODES,
  INVALID_ADDRESS_ERROR_MESSAGE,
  INVALID_COMPANY_NAME,
  INVALID_COUNTRY_CODE,
  INVALID_EMAIL_ERROR_MESSAGE,
  INVALID_FULL_NAME_ERROR_MESSAGE,
  INVALID_VAT,
  VAT_COUNTRY_CODES
} = require('./constants');
const countries = require('./countries');

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

const isValidCountryCode = (countryCode) => COUNTRY_CODES.includes(countryCode);

const isEuCountry = (countryCode) => EU_COUNTRY_CODES.includes(countryCode);

const shouldIncludeVat = (countryCode) => VAT_COUNTRY_CODES.includes(countryCode);

const shouldReverseCharge = (countryCode) => countryCode !== 'PL' && isEuCountry(countryCode);

const validateClientData = ({ address, companyName, countryCode, fullName, email, vatin, isCompany }) => {
  const errors = {
    [INVALID_EMAIL_ERROR_MESSAGE]: !emailValidator.validate(email),
    [INVALID_FULL_NAME_ERROR_MESSAGE]: !isValidString(fullName),
    [INVALID_ADDRESS_ERROR_MESSAGE]: isCompany && !isValidString(address),
    [INVALID_COMPANY_NAME]: isCompany && !isValidString(companyName),
    [INVALID_COUNTRY_CODE]: !isValidCountryCode(countryCode),
    [INVALID_VAT]: isCompany && isEuCountry(countryCode) && !isValidString(vatin)
  };

  return Object.keys(errors).filter((errorMessage) => Boolean(errors[errorMessage]));
};

const getCountryNameByCountryCode = (countryCode) => {
  const { name } = countries.find(({ code }) => code === countryCode);
  return name;
};

module.exports = {
  generateLicense,
  getCountryNameByCountryCode,
  shouldIncludeVat,
  shouldReverseCharge,
  validateClientData
};

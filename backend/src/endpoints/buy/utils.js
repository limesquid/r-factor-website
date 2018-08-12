const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const certificate = require('../../../certificate/license.key');

const sha256 = (string) => crypto.createHash('sha256').update(string).digest('hex');

const generateLicence = ({ fullName, email }) => {
  const licenseData = {
    fullName,
    email,
    key: sha256(`${fullName}:${process.env.LICENSE_SECRET}:${email}`)
  };
  return jwt.sign(licenseData, certificate, { algorithm: 'RS256' });
};

module.exports = {
  generateLicence
};

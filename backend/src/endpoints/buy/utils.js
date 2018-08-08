const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const certificate = require('../../../certificate/license.key');

const sha256 = (string) => crypto.createHash('sha256').update(string).digest('hex');

const generateLicence = ({ fullname, email }) => {
  const licenseData = {
    fullname,
    email,
    key: sha256(`${fullname}:${process.env.LICENSE_SECRET}:${email}`)
  };
  return jwt.sign(licenseData, certificate, { algorithm: 'RS256' });
};

module.exports = {
  generateLicence
};

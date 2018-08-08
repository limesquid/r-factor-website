const express = require('express');
const { generateLicence, verifyLicense } = require('./utils');

// const postBuy = (request, response) => {

// };

const postGenerateLicence = (request, response) => {
  const { fullname, email } = request.body;
  response.send(generateLicence({ fullname, email }));
};

const checkLicense = (request, response) => {
  const { license } = request.body;
  verifyLicense(license);
  response.send('');
};

module.exports = express.Router()
  .post('/generate', postGenerateLicence)
  .post('/check', checkLicense);

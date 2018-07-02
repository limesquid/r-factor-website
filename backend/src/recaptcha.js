const { Recaptcha } = require('express-recaptcha');

module.exports = new Recaptcha(
  process.env.RECAPTCHA_SITE_KEY,
  process.env.RECAPTCHA_SECRET_KEY
);

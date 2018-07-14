const { Recaptcha } = require('express-recaptcha');

const nullMiddleware = (request, response, next) => {
  request.recaptcha = {};
  response.recaptcha = {};
  next();
};

if (process.env.ENABLE_RECAPTCHA === 'true') {
  module.exports = new Recaptcha(
    process.env.RECAPTCHA_SITE_KEY,
    process.env.RECAPTCHA_SECRET_KEY
  );
} else {
  module.exports = {
    middleware: {
      render: nullMiddleware,
      verify: nullMiddleware
    }
  };
}

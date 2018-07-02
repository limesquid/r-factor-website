const bodyParser = require('body-parser');
const express = require('express');
const sgMail = require('@sendgrid/mail');
const refactor = require('./endpoints/refactor');
const support = require('./endpoints/support');
const recaptcha = require('./recaptcha');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  const cors = require('cors');
  app.use(cors());
}

app.post('/refactor', recaptcha.middleware.verify, refactor);
app.post('/support', recaptcha.middleware.verify, support);

app.listen(process.env.API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at ${process.env.API_HOST}:${process.env.API_PORT}/`);
});


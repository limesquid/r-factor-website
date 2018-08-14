const btoa = require('btoa');
const sgMail = require('@sendgrid/mail');
const {
  MAX_CODE_LENGTH,
  MAX_MESSAGE_LENGTH,
  RECAPTCHA_MESSAGE,
  TOO_LONG_MESSAGE,
  TOO_LONG_INPUT_MESSAGE,
  TYPES_STRING
} = require('./constants');

const OUR_EMAIL = process.env.OUR_EMAIL;

module.exports = (request, response) => {
  const payload = parseRequest(request);
  const { configuration, input, message, output } = payload;

  if (request.recaptcha.error) {
    return response.status(400).send(RECAPTCHA_MESSAGE);
  }

  const files = [ configuration, input, output ];
  if (files.some((file) => file.length > MAX_CODE_LENGTH)) {
    return response.status(400).send(TOO_LONG_INPUT_MESSAGE);
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return response.status(400).send(TOO_LONG_MESSAGE);
  }

  const email = createEmail(payload);
  sgMail.send(email)
    .then(() => response.send({ ok: true }))
    .catch((error) => {
      response.status(500).send(error.toString());
    });

  return null;
};

const parseRequest = ({ body }) => ({
  configuration: body.configuration,
  email: body.email,
  input: body.input,
  message: body.message,
  output: body.output,
  response: body.response,
  type: body.type
});

const createEmail = ({ configuration, email, input, message, output, type }) => {
  const emailJson = {
    from: {
      email: OUR_EMAIL
    },
    to: OUR_EMAIL,
    subject: `R-Factor | ${TYPES_STRING[type]}`,
    text: [
      `Email: ${email}`,
      `Message: ${message}`
    ].join('\n\n\n'),
    attachments: []
  };

  if (configuration) {
    emailJson.attachments.push({
      filename: 'configuration',
      type: 'text/json',
      disposition: 'attachment',
      content: btoa(configuration)
    });
  }

  if (input) {
    emailJson.attachments.push({
      filename: 'input',
      type: 'text/json',
      disposition: 'attachment',
      content: btoa(input)
    });
  }

  if (output) {
    emailJson.attachments.push({
      filename: 'output',
      type: 'text/json',
      disposition: 'attachment',
      content: btoa(output)
    });
  }

  return emailJson;
};

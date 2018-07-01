const sgMail = require('@sendgrid/mail');

const OUR_EMAIL = 'r.factor.js@gmail.com';
const MAX_CODE_LENGTH = 4000;
const MAX_MESSAGE_LENGTH = 4000;
const TOO_LONG_MESSAGE = [
  `Come on, that's an essay. TLDR. Please don't send messages longer than ${MAX_MESSAGE_LENGTH} characters.`
].join(' ');
const TOO_LONG_INPUT_MESSAGE = [
  `You cannot submit more than ${MAX_CODE_LENGTH} characters as configuration, input code or expected output.`,
  'Please make your samples concise.'
].join(' ');

const TYPES_STRING = {
  issue: 'Issue',
  contact: 'Contact',
  idea: 'Idea'
};

module.exports = (request, response) => {
  const { configuration, email, input, message, output, type } = parseRequest(request);

  const files = [ configuration, input, output ];
  if (files.some((file) => file.length > MAX_CODE_LENGTH)) {
    return response.status(400).send(TOO_LONG_INPUT_MESSAGE);
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return response.status(400).send(TOO_LONG_MESSAGE);
  }

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

  sgMail.send(emailJson)
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
  type: body.type
});

const btoa = (data) => {
  const buffer = new Buffer(data);
  return buffer.toString('base64');
};

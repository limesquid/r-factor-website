const sgMail = require('@sendgrid/mail');

const OUR_EMAIL = 'r.factor.js@gmail.com';

const TYPES_STRING = {
  bug: 'Bug',
  contact: 'Contact',
  idea: 'Idea'
};


module.exports = (request, response) => {
  const { configuration, email, input, message, output, type } = parseRequest(request);

  const emailJson = {
    from: {
      email: OUR_EMAIL || email
    },
    to: OUR_EMAIL,
    subject: `R-Factor | ${TYPES_STRING[type]}`,
    text: message,
    attachments: []
  };

  if (configuration) {
    emailJson.attachments.push({
      filename: 'configuration.js',
      type: 'text/json',
      disposition: 'attachment',
      content: btoa(configuration)
    });
  }

  if (input) {
    emailJson.attachments.push({
      filename: 'input.js',
      type: 'text/json',
      disposition: 'attachment',
      content: btoa(input)
    });
  }

  if (output) {
    emailJson.attachments.push({
      filename: 'output.js',
      type: 'text/json',
      disposition: 'attachment',
      content: btoa(output)
    });
  }

  sgMail.send(emailJson)
    .then(() => response.send({ ok: true }))
    .catch((error) => {
      console.log(error.toString());
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

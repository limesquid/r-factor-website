const sgMail = require('@sendgrid/mail');

const OUR_EMAIL = 'r.factor.js@gmail.com';

const TYPES_STRING = {
  bug: 'Bug',
  contact: 'Contact',
  idea: 'Idea'
};


module.exports = (request, response) => {
  const { email, message, type } = parseRequest(request);

  const emailJson = {
    from: {
      email: OUR_EMAIL || email
    },
    to: OUR_EMAIL,
    subject: `R-Factor | ${TYPES_STRING[type]}`,
    text: message,
    // attachments: [
    //   {
    //     filename: `${year}.json`,
    //     type: 'text/json',
    //     disposition: 'attachment',
    //     content: btoa(file)
    //   }
    // ]
  };

  sgMail.send(emailJson)
    .then(() => response.send({ ok: true }))
    .catch((error) => {
      console.log(error.toString());
      response.status(500).send(error.toString());
    });

  return null;
};

const parseRequest = ({ body }) => ({
  email: body.email,
  message: body.message,
  type: body.type
});

const btoa = (data) => {
  const buffer = new Buffer(data);
  return buffer.toString('base64');
};

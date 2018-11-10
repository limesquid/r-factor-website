const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const sgMail = require('@sendgrid/mail');
const router = require('./router');

const initializeSendgrid = () => sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const createApp = () => {
  const middlewares = [ trustProxy, useBodyParser, useCors, useRouter ];
  return middlewares.reduce((app, middleware) => middleware(app), express());
};

const useBodyParser = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  return app;
};

const useCors = (app) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(cors());
  }
  return app;
};

const useRouter = (app) => {
  app.use(router());
  return app;
};

const trustProxy = (app) => {
  app.enable('trust proxy');
  return app;
};

initializeSendgrid();

createApp().listen(process.env.API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at ${process.env.API_HOST}:${process.env.API_PORT}/`);
});

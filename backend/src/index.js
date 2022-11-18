const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const router = require('./router');

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

createApp().listen(process.env.API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at ${process.env.API_HOST}:${process.env.API_PORT}/`);
});

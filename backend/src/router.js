const express = require('express');
const path = require('path');
const url = require('url');
const refactor = require('./endpoints/refactor');

const frontendPath = path.resolve(process.cwd(), 'frontend');
const indexHtmlPath = path.resolve(frontendPath, 'index.html');

const getApiRouter = () => {
  const apiRouter = express.Router();
  apiRouter.post('/refactor', refactor);
  return apiRouter;
};

const getStaticRouter = () => {
  if (process.env.NODE_ENV === 'development') {
    return getDevelopmentMiddleware();
  }

  return express.static(frontendPath);
};

const getIndexMiddleware = () => {
  if (process.env.NODE_ENV === 'development') {
    return getDevelopmentMiddleware();
  }

  return (request, response) => response.sendFile(indexHtmlPath);
};

const getDevelopmentMiddleware = () => (request, response) => response.redirect(url.format({
  protocol: 'http',
  hostname: 'localhost',
  port: '3000',
  pathname: request.url,
  query: request.query
}));

module.exports = () => {
  const router = express.Router();
  router.use('/api', getApiRouter());
  router.use(getStaticRouter());
  router.get('/*', getIndexMiddleware());
  return router;
};

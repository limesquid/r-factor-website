const { spawn } = require('child_process');
const {
  MAX_CODE_LENGTH,
  RECAPTCHA_MESSAGE,
  REFACTORINGS,
  TIMEOUT,
  TIMEOUT_MESSAGE,
  TOO_LONG_INPUT_MESSAGE,
  UNKNOWN_REFACTORING_MESSAGE
} = require('./constants');
const devLicense = require('../../../license/dev.license');

module.exports = (request, response) => {
  const { code, refactoring, settings } = parseRequest(request);

  if (request.recaptcha.error) {
    return response.status(400).send(RECAPTCHA_MESSAGE);
  }

  if (!REFACTORINGS.includes(refactoring)) {
    return response.status(400).send(UNKNOWN_REFACTORING_MESSAGE);
  }

  if (code.length > MAX_CODE_LENGTH) {
    return response.status(400).send(TOO_LONG_INPUT_MESSAGE);
  }

  let stdout = '';
  let stderr = '';
  const child = spawn('node', [ process.env.BIN_PATH, '-r', refactoring, '-s', settings, '-l', devLicense ]);
  const timeout = setTimeout(() => {
    response.status(500).send(TIMEOUT_MESSAGE);
    child.kill();
  }, TIMEOUT);

  child.stdin.setEncoding('utf-8');
  child.stdin.write(code);
  child.stdin.end();
  child.stdout.on('data', (data) => {
    stdout += data.toString();
  });
  child.stderr.on('data', (data) => {
    stderr += data.toString();
  });
  child.on('close', () => {
    clearTimeout(timeout);
    if (stderr) {
      response.status(500).send(stderr);
    } else {
      response.send(stdout);
    }
  });

  return null;
};

const parseRequest = ({ body }) => ({
  code: body.code,
  refactoring: body.refactoring,
  settings: JSON.stringify(parseSettings(body.settings))
});

const parseSettings = (settings = {}) => Object.assign({}, settings, {
  NODE_BIN: 'node'
});

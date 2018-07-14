const { spawn } = require('child_process');
const {
  MAX_CODE_LENGTH,
  TIMEOUT,
  RECAPTCHA_MESSAGE,
  TIMEOUT_MESSAGE,
  UNKNOWN_REFACTORING_MESSAGE,
  TOO_LONG_INPUT_MESSAGE,
  REFACTORINGS
} = require('./constants');

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
  const child = spawn('node', [ process.env.BIN_PATH, '-r', refactoring, '-s', settings ]);
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
  settings: JSON.stringify(body.settings || {})
});
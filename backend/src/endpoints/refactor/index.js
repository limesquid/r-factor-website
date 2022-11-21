const rFactor = require('r-factor');
const {
  INVALID_PAYLOAD,
  MAX_CODE_LENGTH,
  REFACTORINGS,
  TOO_LONG_INPUT_MESSAGE,
  UNKNOWN_REFACTORING_MESSAGE
} = require('./constants');

module.exports = (request, response) => {
  const code = request.body.code;
  const refactoring = request.body.refactoring;
  const settings = request.body.settings;

  if (typeof code !== 'string' || typeof refactoring !== 'string' || typeof settings !== 'object') {
    return response.status(400).send(INVALID_PAYLOAD);
  }

  if (!REFACTORINGS.includes(refactoring)) {
    return response.status(400).send(UNKNOWN_REFACTORING_MESSAGE);
  }

  if (code.length > MAX_CODE_LENGTH) {
    return response.status(400).send(TOO_LONG_INPUT_MESSAGE);
  }

  try {
    const result = rFactor({ code, refactoring, settings });
    response.send(result);
  } catch (error) {
    response.status(500).send(String(error));
  }

  return null;
};

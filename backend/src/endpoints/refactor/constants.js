const MAX_CODE_LENGTH = 4000;
const TIMEOUT = 30 * 1000;
const RECAPTCHA_MESSAGE = 'You did not pass reCAPTCHA.';
const TIMEOUT_MESSAGE = `Refactoring timed out (${TIMEOUT / 1000}s).`;
const UNKNOWN_REFACTORING_MESSAGE = 'Unknown refactoring method.';
const TOO_LONG_INPUT_MESSAGE = [
  `You cannot refactor more than ${MAX_CODE_LENGTH} characters here.`,
  'The plugin does not have this limit though.'
].join('\n');
const REFACTORINGS = [
  'add-classname',
  'convert-to-arrow-component',
  'convert-to-class-component',
  'convert-to-function-component',
  'generate-prop-types',
  'move-default-props-and-prop-types-out-of-class',
  'move-default-props-and-prop-types-to-class',
  'sort-attributes',
  'sort-imports',
  'toggle-component-type',
  'toggle-withrouter-hoc',
  'connect',
  'connect-map-dispatch',
  'connect-map-state',
  'connect-merge-props',
  'disconnect',
  'disconnect-map-state',
  'disconnect-map-dispatch',
  'disconnect-merge-props'
];

module.exports = {
  MAX_CODE_LENGTH,
  TIMEOUT,
  RECAPTCHA_MESSAGE,
  TIMEOUT_MESSAGE,
  UNKNOWN_REFACTORING_MESSAGE,
  TOO_LONG_INPUT_MESSAGE,
  REFACTORINGS
};

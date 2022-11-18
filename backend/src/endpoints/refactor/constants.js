const MAX_CODE_LENGTH = 10000;
const RECAPTCHA_MESSAGE = 'You did not pass reCAPTCHA.';
const UNKNOWN_REFACTORING_MESSAGE = 'Unknown refactoring method.';
const TOO_LONG_INPUT_MESSAGE = [
  `You cannot refactor more than ${MAX_CODE_LENGTH} characters here.`,
  'Editor extensions do not have this limit.'
].join('\n');
const REFACTORINGS = [
  'add-classname',
  'connect',
  'connect-map-dispatch-to-props',
  'connect-map-state-to-props',
  'connect-merge-props',
  'convert-svg-to-component',
  'convert-to-arrow-component',
  'convert-to-class-component',
  'convert-to-function-component',
  'disconnect',
  'disconnect-map-dispatch-to-props',
  'disconnect-map-state-to-props',
  'disconnect-merge-props',
  'generate-prop-types',
  'move-default-props-and-prop-types-out-of-class',
  'move-default-props-and-prop-types-to-class',
  'sort-attributes',
  'sort-imports',
  'toggle-component-type',
  'toggle-with-router-hoc'
];

module.exports = {
  MAX_CODE_LENGTH,
  RECAPTCHA_MESSAGE,
  UNKNOWN_REFACTORING_MESSAGE,
  TOO_LONG_INPUT_MESSAGE,
  REFACTORINGS
};

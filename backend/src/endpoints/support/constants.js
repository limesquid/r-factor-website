const OUR_EMAIL = 'r.factor.js@gmail.com';
const MAX_CODE_LENGTH = 4000;
const MAX_MESSAGE_LENGTH = 4000;
const RECAPTCHA_MESSAGE = 'You did not pass reCAPTCHA.';
const TOO_LONG_MESSAGE = [
  `Come on, that's an essay. TLDR. Please don't send messages longer than ${MAX_MESSAGE_LENGTH} characters.`
].join(' ');
const TOO_LONG_INPUT_MESSAGE = [
  `You cannot submit more than ${MAX_CODE_LENGTH} characters as configuration, input code or expected output.`,
  'Please make your samples concise.'
].join(' ');

const TYPES_STRING = {
  issue: 'Issue',
  contact: 'Contact',
  idea: 'Idea'
};

module.exports = {
  OUR_EMAIL,
  MAX_CODE_LENGTH,
  MAX_MESSAGE_LENGTH,
  RECAPTCHA_MESSAGE,
  TOO_LONG_MESSAGE,
  TOO_LONG_INPUT_MESSAGE,
  TYPES_STRING
};

import { spawn } from 'child_process';

const MAX_CODE_LENGTH = 4000;
const TIMEOUT = 30 * 1000;
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
  'move-default-props-out-of-class',
  'move-default-props-to-class',
  'move-prop-types-out-of-class',
  'move-prop-types-to-class',
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

export default (request, response) => {
  const { code, refactoring, settings } = parseRequest(request);

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

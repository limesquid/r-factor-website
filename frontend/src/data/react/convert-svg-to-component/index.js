import example1 from './example1';

export default {
  id: 'convert-svg-to-component',
  name: 'Convert SVG to component',
  summary: 'Turns an SVG into a React component.',
  dependencies: [
    { name: 'react', type: 'always' }
  ],
  examples: [
    example1
  ],
  configuration: [
    'default-component-name',
    'end-of-line',
    'indent',
    'semicolons',
    'svg-component-type'
  ],
  calculator: {
    manualDuration: 120,
    dailyCount: 1
  }
};

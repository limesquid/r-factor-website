import React from 'react';
import example1 from './example1';
import example2 from './example2';
import example3 from './example3';

export default {
  id: 'convert-to-arrow-component',
  name: 'Convert to arrow component',
  summary: (
    <div>
      Turns a component into a functional component defined as an arrow function.
    </div>
  ),
  actions: (
    <React.Fragment>
      <h5>With function component</h5>
      <ul className="text-muted">
        <li>Transforms component function into an arrow function</li>
      </ul>

      <h5>With class component</h5>
      <ul className="text-muted">
        <li>Removes component superclass from import statement</li>
        <li>Moves static <code>propTypes</code> declaration below the component if present</li>
        <li>Moves static <code>defaultProps</code> declaration below the component if present</li>
        <li>Removes constructor & every component method except <code>render</code></li>
        <li>Transforms remaining code into an arrow function</li>
      </ul>
    </React.Fragment>
  ),
  worksWith: [ 'function', 'class' ],
  dependencies: [
    { name: 'react', type: 'always' }
  ],
  examples: [
    example1,
    example2,
    example3
  ],
  configuration: [
    'end-of-line',
    'indent',
    'semicolons'
  ]
};

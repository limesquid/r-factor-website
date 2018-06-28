import React from 'react';
import example1 from './example1';
import example2 from './example2';
import example3 from './example3';

export default {
  id: 'convert-to-function-component',
  name: 'Convert to function component',
  summary: (
    <div>
      Turns a component into a functional component defined as a function.
    </div>
  ),
  actions: (
    <React.Fragment>
      <h5>With arrow component</h5>
      <ul className="text-muted">
        <li>Transforms component arrow function into a function</li>
      </ul>

      <h5>With class component</h5>
      <ul className="text-muted">
        <li>Removes component superclass from import statement</li>
        <li>Moves static <code>propTypes</code> declaration below the component (if present)</li>
        <li>Moves static <code>defaultProps</code> declaration below the component (if present)</li>
        <li>Removes constructor, every static property & every component method except <code>render</code></li>
        <li>Transforms remaining class component into a function</li>
      </ul>
    </React.Fragment>
  ),
  worksWith: [ 'arrow', 'class' ],
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

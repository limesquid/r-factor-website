import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import example1 from './example1';
import example2 from './example2';
import example3 from './example3';

export default {
  id: 'convert-to-arrow-component',
  name: 'Convert to arrow component',
  summary: 'Turns a component into a functional component defined as an arrow function.',
  actions: (
    <React.Fragment>
      <h5>On function component</h5>
      <ul className="text-muted">
        <li>Transforms component function into an arrow function</li>
      </ul>

      <h5>On class component</h5>
      <ul className="text-muted">
        <li>Removes component superclass from import statement</li>
        <li>
          Performs
          {' '}
          <LinkContainer to="/documentation/move-prop-types-out-of-class">
            <a href="/documentation/move-prop-types-out-of-class">
              Move propTypes out of class
            </a>
          </LinkContainer>
        </li>
        <li>
          Performs
          {' '}
          <LinkContainer to="/documentation/move-default-props-out-of-class">
            <a href="/documentation/move-default-props-out-of-class">
              Move defaultProps out of class
            </a>
          </LinkContainer>
        </li>
        <li>Removes (unsafely) everything from class except <code>render</code></li>
        <li>Transforms remaining class component into an arrow function</li>
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

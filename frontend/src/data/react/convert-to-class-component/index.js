import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import example1 from './example1';
import example2 from './example2';
import example3 from './example3';

export default {
  id: 'convert-to-class-component',
  name: 'Convert to class component',
  summary: 'Turns a functional component into a class component.',
  actions: (
    <ul className="text-muted">
      <li>Transforms function component into a class</li>
      <li>
        Adds component superclass (see
        {' '}
        <LinkContainer to="/documentation/component-superclass">
          <a href="/documentation/component-superclass">
            Component superclass
          </a>
        </LinkContainer>
        {' '}
        configuration option) import statement (if not present)
      </li>
      <li>
        Performs
        {' '}
        <LinkContainer to="/documentation/move-prop-types-to-class">
          <a href="/documentation/move-prop-types-to-class">
            Move propTypes to class
          </a>
        </LinkContainer>
      </li>
      <li>
        Performs
        {' '}
        <LinkContainer to="/documentation/move-default-props-to-class">
          <a href="/documentation/move-default-props-to-class">
            Move defaultProps to class
          </a>
        </LinkContainer>
      </li>
    </ul>
  ),
  worksWith: [ 'arrow', 'function' ],
  dependencies: [
    { name: 'react', type: 'always' }
  ],
  examples: [
    example1,
    example2,
    example3
  ],
  configuration: [
    'component-superclass',
    'end-of-line',
    'indent',
    'semicolons'
  ]
};

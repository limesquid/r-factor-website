import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import example1 from './example1';

export default {
  id: 'move-default-props-out-of-class',
  name: 'Move defaultProps out of class',
  summary: (
    <span>
      Converts static <code>defaultProps</code> definition into
      a class property assignment below the class component definition (if present).
    </span>
  ),
  description: (
    <span>
      An inverse of
      {' '}
      <LinkContainer to="/documentation/move-default-props-to-class">
        <a href="/documentation/move-default-props-to-class">
          Move defaultProps to class
        </a>
      </LinkContainer>
      .
    </span>
  ),
  worksWith: [ 'class' ],
  dependencies: [
    { name: 'react', type: 'always' },
    { name: 'prop-types', type: 'always' }
  ],
  examples: [
    example1
  ],
  configuration: [
    'end-of-line',
    'semicolons'
  ]
};

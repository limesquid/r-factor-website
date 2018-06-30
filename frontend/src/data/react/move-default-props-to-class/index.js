import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import example1 from './example1';

export default {
  id: 'move-default-props-to-class',
  name: 'Move defaultProps to class',
  summary: (
    <span>
      Converts <code>defaultProps</code> class property assignment into
      a static property definition in a class component (if present).
    </span>
  ),
  description: (
    <span>
      An inverse of
      {' '}
      <LinkContainer to="/documentation/move-default-props-out-of-class">
        <a href="/documentation/move-default-props-out-of-class">
          Move defaultProps out of class
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
    'indent',
    'semicolons'
  ]
};

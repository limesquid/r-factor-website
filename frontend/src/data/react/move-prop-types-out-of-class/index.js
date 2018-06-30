import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import example1 from './example1';

export default {
  id: 'move-prop-types-out-of-class',
  name: 'Move propTypes out of class',
  summary: (
    <span>
      Converts static <code>propTypes</code> definition into
      a class property assignment below the class component definition (if present).
    </span>
  ),
  description: (
    <span>
      An inverse of
      {' '}
      <LinkContainer to="/documentation/move-prop-types-to-class">
        <a href="/documentation/move-prop-types-to-class">
          Move propTypes to class
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

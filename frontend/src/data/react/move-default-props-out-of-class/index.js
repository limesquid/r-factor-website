import React from 'react';
import Link from 'components/link';
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
    <p>
      An inverse of
      {' '}
      <Link href="/documentation/move-default-props-to-class" label="Move defaultProps to class" />
      .
    </p>
  ),
  worksWith: [ 'class', 'hoc-class' ],
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

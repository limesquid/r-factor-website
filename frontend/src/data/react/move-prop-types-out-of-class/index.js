import React from 'react';
import Link from 'components/link';
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
    <p>
      An inverse of
      {' '}
      <Link href="/documentation/move-prop-types-to-class" label="Move propTypes to class" />
      .
    </p>
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

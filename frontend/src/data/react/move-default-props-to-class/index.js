import React from 'react';
import Link from 'components/link';
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
      <Link href="/documentation/move-default-props-out-of-class" label="Move defaultProps out of class" />
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

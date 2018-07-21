import React from 'react';
import Link from 'components/link';
import example1 from './example1';

export default {
  id: 'move-prop-types-to-class',
  name: 'Move propTypes to class',
  summary: (
    <span>
      Converts <code>propTypes</code> class property assignment into
      a static property definition in a class component (if present).
    </span>
  ),
  description: (
    <p>
      An inverse of
      {' '}
      <Link href="/documentation/move-prop-types-out-of-class" label="Move propTypes out of class" />
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
    'indent',
    'semicolons'
  ]
};

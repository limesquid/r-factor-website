import React from 'react';
import Link from 'components/link';
import example1 from './example1';

export default {
  id: 'move-default-props-and-prop-types-to-class',
  name: 'Move defaultProps & propTypes to class',
  summary: (
    <span>
      Converts <code>defaultProps</code> & <code>propTypes</code> class property assignments into
      static property definitions in a class component (if present).
    </span>
  ),
  description: (
    <p>
      An inverse of
      {' '}
      <Link
        href="/documentation/move-default-props-and-prop-types-out-of-class"
        label="Move defaultProps & propTypes out of class" />
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

import React from 'react';
import Link from 'components/link';
import example1 from './example1';

export default {
  id: 'move-default-props-and-prop-types-out-of-class',
  name: 'Move defaultProps & propTypes out of class',
  summary: (
    <span>
      Converts static <code>defaultProps</code> & <code>propTypes</code> definitions into
      class property assignments below the class component definition (if present).
    </span>
  ),
  description: (
    <p>
      An inverse of
      {' '}
      <Link
        href="/documentation/move-default-props-and-prop-types-to-class"
        label="Move defaultProps & propTypes to class" />
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

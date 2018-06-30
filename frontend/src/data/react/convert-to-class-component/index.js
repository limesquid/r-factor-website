import React from 'react';
import Link from 'components/link';
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
        <Link href="/documentation/component-superclass" label="Component superclass" />
        {' '}
        configuration option) import statement (if not present)
      </li>
      <li>
        Performs
        {' '}
        <Link href="/documentation/move-prop-types-to-class" label="Move propTypes to class" />
      </li>
      <li>
        Performs
        {' '}
        <Link href="/documentation/move-default-props-to-class" label="Move defaultProps to class" />
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

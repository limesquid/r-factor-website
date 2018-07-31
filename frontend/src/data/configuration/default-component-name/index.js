import React from 'react';
import Link from 'components/link';
import example1 from './example1';

export default {
  id: 'default-component-name',
  name: 'Default component name',
  summary: (
    <span>
      How should an unnamed component be named if it needs to be wrapped with a HOC.
    </span>
  ),
  description: (
    <p>
      If the refactoring you're applying is wrapping your unnamed component with a HOC,
      it will have to be named somehow.
      If there is a collision
      {' '}
      <Link href="/documentation/component-name-collision-pattern" label="Component name collision pattern" />
      {' '}
      will be used as well.
    </p>
  ),
  examples: [
    example1
  ],
  setting: {
    type: 'String',
    defaultValue: 'Component'
  }
};

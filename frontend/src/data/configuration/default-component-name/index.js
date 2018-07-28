import React from 'react';
import example1 from './example1';

export default {
  id: 'default-component-name',
  name: 'Default component name',
  summary: (
    <span>
      How should component be named if it needs to be wrapped in HOC but is exported defaultly.
    </span>
  ),
  description: (
    <p>
      Component should be named somehow when refactoring you apply wraps this component in HOC.
      If there is a collision <code>component-name-collision-pattern</code> along with <code>default-component-name</code> will be used.
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

import React from 'react';
import example1 from './example1';
import example2 from './example2';

export default {
  id: 'default-hoc-component-name',
  name: 'Default HOC component name',
  summary: (
    <span>
      How should an unnamed HOC component be named if it needs to be wrapped with another HOC.
    </span>
  ),
  description: (
    <p>
      If the refactoring you're applying is wrapping your unnamed HOC component with another HOC,
      it will have to be named somehow.
    </p>
  ),
  examples: [
    example1,
    example2
  ],
  setting: {
    type: 'String',
    defaultValue: 'InnerComponent'
  }
};

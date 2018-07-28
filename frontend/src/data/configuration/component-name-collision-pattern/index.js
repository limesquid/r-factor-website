import React from 'react';
import example1 from './example1';

export default {
  id: 'component-name-collision-pattern',
  name: 'Component name collision pattern',
  summary: (
    <span>
      How should a component be named if name collision occurs during refactoring.
    </span>
  ),
  description: (
    <p>
      Sometimes we need to rename your original component to retain code properiness.
      For example you have an exported named component which you would like to connect to
      Redux store without breaking your app, so we will use this setting to rename the component
      according to your preferences.
    </p>
  ),
  examples: [
    example1
  ],
  setting: {
    type: 'String',
    defaultValue: '${name}Component'
  }
};

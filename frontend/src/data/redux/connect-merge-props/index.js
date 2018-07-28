import React from 'react';

export default {
  id: 'connect-merge-props',
  name: 'Connect mergeProps',
  summary: (
    <span>
      Connects a component to the redux store and generates <code>mergeProps</code> only.
    </span>
  ),
  configuration: [
    'component-name-collision-pattern',
    'default-component-name',
    'default-hoc-component-name',
    'end-of-line',
    'indent',
    'merge-props-name',
    'semicolons'
  ]
};

import React from 'react';

export default {
  id: 'connect-map-dispatch',
  name: 'Connect mapDispatchToProps',
  summary: (
    <span>
      Connects a component to the redux store and generates <code>mapDispatchToProps</code> only.
    </span>
  ),
  configuration: [
    'component-name-collision-pattern',
    'default-component-name',
    'default-hoc-component-name',
    'end-of-line',
    'indent',
    'map-dispatch-to-props-name',
    'map-dispatch-to-props-prefer-object',
    'semicolons'
  ]
};

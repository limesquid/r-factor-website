import React from 'react';

export default {
  id: 'connect-map-state',
  name: 'Connect mapStateToProps',
  summary: (
    <span>
      Connects a component to the redux store and generates <code>mapStateToProps</code> only.
    </span>
  ),
  configuration: [
    'component-name-collision-pattern',
    'default-component-name',
    'default-hoc-component-name',
    'end-of-line',
    'indent',
    'map-state-to-props-name',
    'semicolons'
  ]
};

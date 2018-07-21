import React from 'react';

export default {
  id: 'map-dispatch-to-props-name',
  name: 'Custom mapDispatchToProps name',
  summary: (
    <span>
      Custom name for <code>mapDispatchToProps</code> identifier used when connecting a component to the redux store.
    </span>
  ),
  description: (
    <span>
      This will be the name of the 2nd argument passed to <code>connect</code> from <code>react-redux</code> package.
    </span>
  ),
  setting: {
    type: 'String',
    defaultValue: 'mapDispatchToProps'
  }
};

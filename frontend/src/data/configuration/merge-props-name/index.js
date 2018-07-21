import React from 'react';

export default {
  id: 'merge-props-name',
  name: 'Custom mergeProps name',
  summary: (
    <span>
      Custom name for <code>mergeProps</code> identifier used when connecting a component to the redux store.
    </span>
  ),
  description: (
    <span>
      This will be the name of the 3rd argument passed to <code>connect</code> from <code>react-redux</code> package.
    </span>
  ),
  setting: {
    type: 'String',
    defaultValue: 'mergeProps'
  }
};

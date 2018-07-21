import React from 'react';

export default {
  id: 'map-state-to-props-name',
  name: 'Custom mapStateToProps name',
  summary: (
    <span>
      Custom name for <code>mapStateToProps</code> identifier used when connecting a component to the redux store.
    </span>
  ),
  description: (
    <span>
      This will be the name of the 1st argument passed to <code>connect</code> from <code>react-redux</code> package.
    </span>
  ),
  setting: {
    type: 'String',
    defaultValue: 'mapStateToProps'
  }
};

import React from 'react';

export default {
  id: 'map-state-to-props-prefer-one-line',
  name: 'Prefer one-line mapStateToProps',
  summary: (
    <span>
      When <code>true</code>, single-line <code>mapStateToProps</code> will be generated when connecting a component to the redux store.
      When <code>false</code>, multi-line <code>mapStateToProps</code> will be generated instead.
    </span>
  ),
  setting: {
    type: 'Boolean',
    defaultValue: 'true'
  }
};

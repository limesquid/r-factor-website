import React from 'react';

export default {
  id: 'map-dispatch-to-props-prefer-object',
  name: 'Prefer object mapDispatchToProps',
  summary: (
    <span>
      When <code>true</code>, <code>mapDispatchToProps</code> will be generated as an object.
      When <code>false</code>, <code>mapDispatchToProps</code> will be generated as an arrow function returning an object.
    </span>
  ),
  setting: {
    type: 'Boolean',
    defaultValue: 'true'
  }
};

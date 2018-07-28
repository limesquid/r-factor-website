import React from 'react';

export default {
  id: 'map-dispatch-to-props-prefer-object',
  name: 'Prefer object mapDispatchToProps',
  summary: (
    <span>Which variant of <code>mapDispatchToProps</code> notation to use.</span>
  ),
  description: (
    <ul className="text-muted">
      <li>When <code>true</code>, <code>mapDispatchToProps</code> will be generated as an object.</li>
      <li>When <code>false</code>, <code>mapDispatchToProps</code> will be generated as an arrow function returning an object.</li>
    </ul>
  ),
  setting: {
    type: 'Boolean',
    defaultValue: 'true'
  }
};

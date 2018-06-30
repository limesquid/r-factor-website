import React from 'react';

export default {
  id: 'semicolons',
  name: 'Semicolons',
  summary: (
    <span>
      Some people like ASI and some don't.
    </span>
  ),
  setting: {
    type: 'Boolean',
    defaultValue: 'true',
    possibleValues: [
      <span key="0"><code>true</code></span>,
      <span key="1"><code>false</code></span>
    ]
  }
};

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
    defaultValue: true
  },
  options: [
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ]
};

import React from 'react';

export default {
  id: 'trailing-commas',
  name: 'Trailing commas',
  summary: (
    <span>
      Affects multi-line statements only.
    </span>
  ),
  setting: {
    type: 'Boolean',
    defaultValue: false
  },
  options: [
    { label: 'No', value: false },
    { label: 'Yes', value: true }
  ]
};

import React from 'react';

export default {
  id: 'indent',
  name: 'Indent',
  summary: (
    <span>
      Indent characters(s).
    </span>
  ),
  setting: {
    type: [
      'String',
      'Number'
    ],
    defaultValue: '2',
    possibleValues: [
      <span key="0"><code>"tab"</code> - 1 tab indent</span>,
      <span key="1"><code>2</code> - 2 spaces indent</span>,
      <span key="2"><code>4</code> - 4 spaces indent</span>
    ]
  }
};

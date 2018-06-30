import React from 'react';

export default {
  id: 'end-of-line',
  name: 'End of line',
  summary: (
    <span>
      End-of-line character(s).
    </span>
  ),
  setting: {
    type: 'String',
    defaultValue: '"\\n"',
    possibleValues: [
      <span key="0"><code>"\n"</code> - Unix style</span>,
      <span key="1"><code>"\r\n"</code> - Windows style</span>
    ]
  }
};

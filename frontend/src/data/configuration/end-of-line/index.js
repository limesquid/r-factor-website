import React from 'react';

export default {
  id: 'end-of-line',
  name: 'End of line',
  summary: (
    <span>
      End-of-line character(s).
    </span>
  ),
  description: (
    <span>
      Use <code>"\n"</code> for Unix style line endings & <code>"\r\n"</code> for Windows style line endings.
    </span>
  ),
  setting: {
    type: 'String',
    defaultValue: '"\\n"'
  }
};

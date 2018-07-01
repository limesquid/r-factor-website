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
    <p>
      Use <code>"\n"</code> for Unix style line endings & <code>"\r\n"</code> for Windows style line endings.
    </p>
  ),
  setting: {
    type: 'String',
    defaultValue: '"\\n"'
  }
};

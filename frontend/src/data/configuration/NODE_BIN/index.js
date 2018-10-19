import React from 'react';

export default {
  id: 'NODE_BIN',
  name: 'Node binary path',
  summary: (
    <span>
      Path to <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/">node.js</a> binary.
      Useful only in Sublime Text 3.
    </span>
  ),
  description: (
    <span>
      Usually you will be fine with the default value if <a href="https://nodejs.org/">node.js</a> binary
      is in your <code>PATH</code> environment variable. But sometimes your editor may have problems resolving
      the absolute path to <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/">node.js</a>
      {' '}so you can set a custom path here.
    </span>
  ),
  setting: {
    type: 'String',
    defaultValue: 'node'
  }
};

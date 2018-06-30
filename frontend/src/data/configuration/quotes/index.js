import React from 'react';

export default {
  id: 'quotes',
  name: 'Quotes',
  summary: (
    <span>
      Which quotation marks to use for strings.
    </span>
  ),
  description: (
    <span>
      Configuration is the same as String option
      in <a href="https://eslint.org/docs/rules/quotes">ESLint</a>.
    </span>
  ),
  setting: {
    type: 'String',
    defaultValue: '"single"',
    possibleValues: [
      <span key="0"><code>"single"</code> - <code>'</code></span>,
      <span key="1"><code>"double"</code> - <code>"</code></span>,
      <span key="2"><code>"backtick"</code> - <code>`</code></span>
    ]
  }
};

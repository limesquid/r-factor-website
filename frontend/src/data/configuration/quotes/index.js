import React, { Fragment } from 'react';

export default {
  id: 'quotes',
  name: 'Quotes',
  summary: (
    <span>
      Which quotation marks to use for strings.
    </span>
  ),
  description: (
    <Fragment>
      <span>Possible values are:</span>
      <ul>
        <li><code>"single"</code> - stands for <code>'</code></li>
        <li><code>"double"</code> - stands for <code>"</code></li>
        <li><code>"backtick"</code> - stands for <code>`</code></li>
      </ul>
      <p>
        Configuration is the same as String option
        in <a href="https://eslint.org/docs/rules/quotes">ESLint</a>.
      </p>
    </Fragment>
  ),
  setting: {
    type: 'String',
    defaultValue: 'single'
  },
  options: [
    { label: 'Single', value: 'single' },
    { label: 'Double', value: 'double' },
    { label: 'Backtick', value: 'backtick' }
  ]
};

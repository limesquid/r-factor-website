import React, { Fragment } from 'react';

export default {
  id: 'indent',
  name: 'Indent',
  summary: (
    <span>
      Indent characters(s).
    </span>
  ),
  description: (
    <Fragment>
      <p>
        Set the value to <code>"tab"</code> to use 1-tab indentation.
        Set the value to an integer to use space indentation of that size.
      </p>
      <p>
        Configuration mimics the one in <a href="https://eslint.org/docs/rules/indent">ESLint</a>.
      </p>
    </Fragment>
  ),
  setting: {
    type: [
      'String',
      'Number'
    ],
    defaultValue: '2'
  }
};

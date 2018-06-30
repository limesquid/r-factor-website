import React from 'react';

const defaultValue = `[
  "react",
  "react-dom",
  "prop-types",
  "classnames",
  "lodash",
  "lodash-es",
  "underscore",
  "redux-saga",
  "redux-saga/effects",
  "react-redux",
  "react-router-redux",
  "redux-actions",
  "reselect",
  "re-reselect",
  "react-router-dom",
  "react-hot-loader"
]`;

export default {
  id: 'modules-order',
  name: 'Modules order',
  summary: (
    <span>
      Order used when sorting <code>import</code> statements.
    </span>
  ),
  description: (
    <span>
      When you provide an <code>Array</code> each <code>String</code> in it corresponds
      to a module name. <code>import</code> statements will be sorted according to specified order
      of modules. Modules that do not appear on the list will be moved to the bottom
      of <code>import</code> statements block at the top of the file.
    </span>
  ),
  setting: {
    type: [
      'String',
      'Array'
    ],
    defaultValue,
    possibleValues: [
      <span key="0"><code>"alphabetic"</code> - lexicographical sorting by module name</span>,
      <span key="1"><code>[ "react" ]</code> - React import always first</span>
    ]
  }
};

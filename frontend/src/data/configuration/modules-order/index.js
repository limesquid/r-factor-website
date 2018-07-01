import React, { Fragment } from 'react';

const defaultValue = [
  'react',
  'react-dom',
  'prop-types',
  'classnames',
  'lodash',
  'lodash-es',
  'underscore',
  'redux-saga',
  'redux-saga/effects',
  'react-redux',
  'react-router-redux',
  'redux-actions',
  'reselect',
  're-reselect',
  'react-router-dom',
  'react-hot-loader'
];

export default {
  id: 'modules-order',
  name: 'Modules order',
  summary: (
    <span>
      What order to use when sorting imports.
    </span>
  ),
  description: (
    <Fragment>
      <p>
        When you set the value to an <code>Array</code> each <code>String</code> in it corresponds
        to a module name. <code>import</code> statements will be sorted according to specified order
        of modules. Modules that do not appear on the list will be moved to the bottom
        of <code>import</code> statements block at the top of the file.
      </p>
      <p>
        Set the value to <code>"alphabetic"</code> for lexicographical sorting by module name.
      </p>
    </Fragment>
  ),
  setting: {
    type: [
      'String',
      'Array'
    ],
    defaultValue
  }
};

import React, { Fragment } from 'react';

export default {
  id: 'functional-component-type',
  name: 'Functional component type',
  summary: (
    <span>
      Which functional component notation to use when toggling component type.
    </span>
  ),
  description: (
    <Fragment>
      <span>Possible values are:</span>
      <ul>
        <li><code>"arrow"</code> - arrow function notation</li>
        <li><code>"function"</code> - function declaration notation</li>
      </ul>
    </Fragment>
  ),
  setting: {
    type: 'String',
    defaultValue: '"arrow"'
  }
};

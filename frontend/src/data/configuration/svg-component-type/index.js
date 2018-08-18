import React, { Fragment } from 'react';
import Link from 'components/link';

export default {
  id: 'svg-component-type',
  name: 'SVG component type',
  summary: (
    <span>
      Which type of component should be generated
      by <Link href="/documentation/convert-svg-to-component" label="Convert SVG to component" />.
    </span>
  ),
  description: (
    <Fragment>
      <span>Possible values are:</span>
      <ul>
        <li><code>"arrow"</code> - functional component defined as an arrow function</li>
        <li><code>"function"</code> - functional component defined as a function</li>
        <li><code>"class"</code> - class component</li>
      </ul>
    </Fragment>
  ),
  setting: {
    type: 'String',
    defaultValue: 'arrow'
  },
  options: [
    { label: 'Arrow function', value: 'arrow' },
    { label: 'Function', value: 'function' },
    { label: 'Class', value: 'class' }
  ]
};

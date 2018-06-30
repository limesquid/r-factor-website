import React from 'react';
import Link from 'components/link';

export default {
  id: 'component-superclass',
  name: 'Component superclass',
  summary: (
    <span>
      Which superclass to use when converting a functional component to a class component.
    </span>
  ),
  description: (
    <span>
      Used when performing
      {' '}
      <Link href="/documentation/convert-to-class-component" label="Convert to class component" />
      {' and '}
      <Link href="/documentation/toggle-component-type" label="Toggle component type" />
      .
    </span>
  ),
  setting: {
    type: 'String',
    defaultValue: '"Component"',
    possibleValues: [
      <code key="0">"Component"</code>,
      <code key="1">"PureComponent"</code>
    ]
  }
};

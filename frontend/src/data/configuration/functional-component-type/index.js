import React from 'react';
import Link from 'components/link';

export default {
  id: 'functional-component-type',
  name: 'Functional component type',
  summary: (
    <span>
      Which functional component notation to use when performing
      {' '}
      <Link href="/documentation/toggle-component-type" label="Toggle component type" />
      .
    </span>
  ),
  setting: {
    type: 'String',
    defaultValue: '"arrow"',
    possibleValues: [
      <code key="0">"arrow"</code>,
      <code key="1">"function"</code>
    ]
  }
};

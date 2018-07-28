import React from 'react';
import example1 from './example1';
import example2 from './example2';

export default {
  id: 'default-hoc-component-name',
  name: 'Default HOC component name',
  summary: (
    <span>
      How should unnamed component returned in HOC be named when needs to be wrapped.
    </span>
  ),
  description: (
    <p>
      When component is returned from HOC but has no name and we want to wrap it in HOC, we need to name it somehow.
    </p>
  ),
  examples: [
    example1,
    example2
  ],
  setting: {
    type: 'String',
    defaultValue: 'InnerComponent'
  }
};

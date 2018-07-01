import React from 'react';

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
      You can choose between <code>"Component"</code> & <code>"PureComponent"</code>.
      It will be imported from <code>react</code> module.
    </span>
  ),
  setting: {
    type: 'String',
    defaultValue: '"Component"'
  }
};

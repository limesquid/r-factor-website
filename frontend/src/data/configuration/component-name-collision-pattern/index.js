import React from 'react';
import example1 from './example1';

export default {
  id: 'component-name-collision-pattern',
  name: 'Component name collision pattern',
  summary: (
    <span>
      How should a component be named if name collision occurs during refactoring.
    </span>
  ),
  description: (
    <p>
      Sometimes your component will have to be renamed in order to avoid naming collision.
      This can happen e.g. when you have a non-default export of a component and you want it
      to be connected to the redux store. A new export statement will be declared for the
      new connected component with the current name, and your current component will be
      renamed according to this setting. <code>{'${name}'}</code> will be replaced with
      the name of your component before refactoring, so you can configure it
      to have a prefix, suffix or just be a concrete name. It's best if you see the example.
    </p>
  ),
  examples: [
    example1
  ],
  setting: {
    type: 'String',
    defaultValue: '${name}Component'
  }
};

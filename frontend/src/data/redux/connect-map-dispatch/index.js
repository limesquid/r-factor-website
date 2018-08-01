import React from 'react';
import example1 from './example1';
import example2 from './example2';

export default {
  id: 'connect-map-dispatch',
  name: 'Connect mapDispatchToProps',
  summary: (
    <span>
      Connects a component to the redux store and generates <code>mapDispatchToProps</code> only.
    </span>
  ),
  actions: (
    <ul className="text-muted">
      <li>
        Declares <code>mapDispatchToProps</code> below the component definition (if not present)
      </li>
      <li>
        Wraps exported (returned, if it's a HOC) component with <code>connect</code> (if not present)
      </li>
      <li>
        Uses <code>mapDispatchToProps</code> with said <code>connect</code>
        {' '}
        (replacing <code>null</code> values if present)
      </li>
      <li>
        Adds <code>connect</code> import statement (if not present)
      </li>
    </ul>
  ),
  configuration: [
    'component-name-collision-pattern',
    'default-component-name',
    'default-hoc-component-name',
    'end-of-line',
    'indent',
    'map-dispatch-to-props-name',
    'use-map-dispatch-to-props-shorthand',
    'semicolons'
  ],
  examples: [
    example1,
    example2
  ]
};

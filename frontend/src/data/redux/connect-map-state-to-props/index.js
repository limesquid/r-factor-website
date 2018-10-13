import React from 'react';
import example1 from './example1';
import example2 from './example2';

export default {
  id: 'connect-map-state-to-props',
  name: 'Connect mapStateToProps',
  summary: (
    <span>
      Connects a component to the redux store and generates <code>mapStateToProps</code> only.
    </span>
  ),
  actions: (
    <ul className="text-muted">
      <li>
        Defines <code>mapStateToProps</code> below the component definition (if not present)
      </li>
      <li>
        Wraps exported (returned, if it's a HOC) component with <code>connect</code> (if not present)
      </li>
      <li>
        Uses <code>mapStateToProps</code> with aforementioned <code>connect</code>
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
    'map-state-to-props-name',
    'semicolons'
  ],
  examples: [
    example1,
    example2
  ]
};

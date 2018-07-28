import React from 'react';

export default {
  id: 'connect-merge-props',
  name: 'Connect mergeProps',
  summary: (
    <span>
      Connects a component to the redux store and generates <code>mergeProps</code> only.
    </span>
  ),
  actions: (
    <ul className="text-muted">
      <li>Declares <code>mergeProps</code> below the component definition (if not present)</li>
      <li>Wraps exported (returned, if it's a HOC) component with <code>connect</code> (if not present)</li>
      <li>Uses <code>mergeProps</code> with said <code>connect</code> (replacing <code>null</code> values if present)</li>
      <li>Adds <code>connect</code> import statement (if not present)</li>
    </ul>
  ),
  configuration: [
    'component-name-collision-pattern',
    'default-component-name',
    'default-hoc-component-name',
    'end-of-line',
    'indent',
    'merge-props-name',
    'semicolons'
  ]
};

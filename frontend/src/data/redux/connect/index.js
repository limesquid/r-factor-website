import React from 'react';

export default {
  id: 'connect',
  name: 'Connect',
  summary: (
    <span>
      Connects a component to the redux store with
      both <code>mapStateToProps</code> & <code>mapDispatchToProps</code> generated.
    </span>
  ),
  actions: (
    <ul className="text-muted">
      <li>Declares <code>mapStateToProps</code> below the component definition (if not present)</li>
      <li>Declares <code>mapDispatchToProps</code> below the component definition (if not present)</li>
      <li>Wraps exported (returned, if it's a HOC) component with <code>connect</code> (if not present)</li>
      <li>Uses <code>mapStateToProps</code> & <code>mapDispatchToProps</code> with said <code>connect</code> (replacing <code>null</code> values if present)</li>
      <li>Adds <code>connect</code> import statement (if not present)</li>
    </ul>
  ),
  worksWith: [ 'arrow', 'function', 'class', 'hoc-arrow', 'hoc-function', 'hoc-class' ],
  dependencies: [
    { name: 'react', type: 'always' },
    { name: 'react-redux', type: 'always' }
  ],
  configuration: [
    'end-of-line',
    'indent',
    'map-state-to-props-name',
    'map-state-to-props-prefer-one-line',
    'map-dispatch-to-props-name',
    'map-dispatch-to-props-prefer-object',
    'semicolons'
  ],
  examples: [
    // TODO
  ]
};

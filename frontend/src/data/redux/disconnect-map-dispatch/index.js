import React from 'react';

export default {
  id: 'disconnect-map-dispatch',
  name: 'Disconnect mapDispatchToProps',
  summary: (
    <span>
      Disconnects <code>mapDispatchToProps</code> from a component connected to a redux store.
      Disconnects completely if possible.
    </span>
  ),
  actions: (
    <ul className="text-muted">
      <li>Removes <code>mapDispatchToProps</code> definition (if present)</li>
      <li>If <code>connect</code> is present and no non-<code>null</code> parameters other than <code>mapDispatchToProps</code> are passed to it</li>
      <ul>
        <li>Unwraps exported (returned, if it's a HOC) component from <code>connect</code></li>
        <li>Removes <code>connect</code> import statement</li>
      </ul>
      <li>If <code>connect</code> is present and <code>mergeProps</code> is passed to it</li>
      <ul>
        <li>Replaces <code>mapDispatchToProps</code> parameter with <code>null</code> in <code>connect</code> call (if present)</li>
      </ul>
      <li>If <code>connect</code> is present and <code>mergeProps</code> is not passed to it</li>
      <ul>
        <li>Removes <code>mapDispatchToProps</code> parameter from <code>connect</code> call (if present)</li>
      </ul>
    </ul>
  ),
  worksWith: [ 'arrow', 'function', 'class', 'hoc-arrow', 'hoc-function', 'hoc-class' ],
  dependencies: [
    { name: 'react', type: 'always' },
    { name: 'react-redux', type: 'always' }
  ],
  configuration: [],
  examples: [
    // TODO
  ]
};

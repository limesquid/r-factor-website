import React from 'react';

export default {
  id: 'disconnect-merge-props',
  name: 'Disconnect mergeProps',
  summary: (
    <span>
      Disconnects <code>mergeProps</code> from a component connected to a redux store.
      Disconnects completely if possible.
    </span>
  ),
  actions: (
    <ul className="text-muted">
      <li>Removes <code>mergeProps</code> definition (if present)</li>
      <li>If <code>connect</code> is present and no non-<code>null</code> parameters other than <code>mergeProps</code> are passed to it</li>
      <ul>
        <li>Unwraps exported (returned, if it's a HOC) component from <code>connect</code></li>
        <li>Removes <code>connect</code> import statement</li>
      </ul>
      <li>If <code>connect</code> is present and <code>mapStateToProps</code> or <code>mapDispatchToProps</code> is passed to it</li>
      <ul>
        <li>Removes <code>mergeProps</code> parameter from <code>connect</code> call (if present)</li>
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

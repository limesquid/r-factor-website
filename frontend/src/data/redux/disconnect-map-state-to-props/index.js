import React from 'react';
import example1 from './example1';
import example2 from './example2';
import example3 from './example3';

export default {
  id: 'disconnect-map-state-to-props',
  name: 'Disconnect mapStateToProps',
  summary: (
    <span>
      Disconnects <code>mapStateToProps</code> from a component connected to a redux store.
      Disconnects completely if possible.
    </span>
  ),
  actions: (
    <ul className="text-muted">
      <li>
        Removes <code>mapStateToProps</code> definition (if present)
      </li>
      <li>
        If <code>connect</code> is present and no non-<code>null</code> parameters
        other than <code>mapStateToProps</code> are passed to it
      </li>
      <ul>
        <li>
          Unwraps exported (returned, if it's a HOC) component from <code>connect</code>
        </li>
        <li>
          Removes <code>connect</code> import statement
        </li>
      </ul>
      <li>
        If <code>connect</code> is present
        and <code>mapDispatchToProps</code> or <code>mergeProps</code> is passed to it
      </li>
      <ul>
        <li>
          Replaces <code>mapStateToProps</code> parameter
          with <code>null</code> in <code>connect</code> call (if present)
        </li>
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
    example1,
    example2,
    example3
  ]
};

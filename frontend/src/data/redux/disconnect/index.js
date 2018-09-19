import React from 'react';
import example1 from './example1';
import example2 from './example2';

export default {
  id: 'disconnect',
  name: 'Disconnect',
  summary: (
    <span>
      Disconnects a component from redux store and removes
      all <code>mapStateToProps</code>, <code>mapDispatchToProps</code> & <code>mergeProps</code>.
    </span>
  ),
  actions: (
    <ul className="text-muted">
      <li>Removes <code>mapStateToProps</code> definition (if present)</li>
      <li>Removes <code>mapDispatchToProps</code> definition (if present)</li>
      <li>Removes <code>mergeProps</code> definition (if present)</li>
      <li>Unwraps exported (returned, if it's a HOC) component from <code>connect</code> (if present)</li>
      <li>Removes <code>connect</code> import statement (if present)</li>
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
    example2
  ],
  calculator: {
    manualDuration: 20,
    dailyCount: 15
  }
};

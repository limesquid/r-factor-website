import React from 'react';
import example1 from './example1';
import example2 from './example2';
import example3 from './example3';

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
      <li>
        Defines <code>mapStateToProps</code> below the component definition (if not present)
      </li>
      <li>
        Defines <code>mapDispatchToProps</code> below the component definition (if not present)
      </li>
      <li>
        Wraps exported (returned, if it's a HOC) component with <code>connect</code> (if not present)
      </li>
      <li>
        Uses <code>mapStateToProps</code> & <code>mapDispatchToProps</code> with aforementioned <code>connect</code>
        {' '}
        (replacing <code>null</code> values if present)
      </li>
      <li>
        Adds <code>connect</code> import statement (if not present)
      </li>
    </ul>
  ),
  worksWith: [ 'arrow', 'function', 'class', 'hoc-arrow', 'hoc-function', 'hoc-class' ],
  dependencies: [
    { name: 'react', type: 'always' },
    { name: 'react-redux', type: 'always' }
  ],
  configuration: [
    'component-name-collision-pattern',
    'default-component-name',
    'default-hoc-component-name',
    'end-of-line',
    'indent',
    'map-state-to-props-name',
    'map-dispatch-to-props-name',
    'use-map-dispatch-to-props-shorthand',
    'semicolons'
  ],
  examples: [
    example1,
    example2,
    example3
  ],
  calculator: {
    manualDuration: 30,
    dailyCount: 5
  }
};

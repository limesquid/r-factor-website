import React from 'react';
import example1 from './example1';
import example2 from './example2';

export default {
  id: 'toggle-withrouter-hoc',
  name: 'Toggle withRouter HOC',
  summary: (
    <span>
      Either unwraps or wraps your component with <code>withRouter</code> from <code>react-router</code>.
    </span>
  ),
  description: (
    <span>
      If your component is not wrapped, it will be. If it is, it won't be. It's compatible with React Router 4.
    </span>
  ),
  actions: (
    <React.Fragment>
      <h5>When wrapping</h5>
      <ul className="text-muted">
        <li>Adds <code>withRouter</code> import statement</li>
        <li>Wraps exported reference with <code>withRouter</code> call</li>
      </ul>

      <h5>When unwrapping</h5>
      <ul className="text-muted">
        <li>Strips exported reference out of <code>withRouter</code> call</li>
        <li>Removes <code>withRouter</code> import statement</li>
      </ul>
    </React.Fragment>
  ),
  worksWith: [ 'arrow', 'function', 'class' ],
  dependencies: [
    { name: 'react', type: 'always' },
    { name: 'react-router', type: 'always' }
  ],
  examples: [
    example1,
    example2
  ],
  configuration: [
    /* TODO */
  ]
};

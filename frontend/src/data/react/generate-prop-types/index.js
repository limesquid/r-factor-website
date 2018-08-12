import React from 'react';
import example1 from './example1';
import example2 from './example2';

export default {
  id: 'generate-prop-types',
  name: 'Generate propTypes',
  summary: (
    <span>
      Adds missing <code>propTypes</code> definitions for every prop used in a component.
    </span>
  ),
  description: (
    <div>
      R-Factor will try to guess types of your props based on their name. There are some predefined types:
      <ul>
        <li><code>children</code> will be considered <code>PropTypes.node</code></li>
        <li><code>className</code> will be considered <code>PropTypes.string</code></li>
        <li><code>disabled</code> will be considered <code>PropTypes.bool</code></li>
        <li><code>style</code> will be considered <code>PropTypes.object</code></li>
        <li>Props prefixed with <code>on</code> will be considered <code>PropTypes.func</code></li>
        <li>Props prefixed with <code>is</code> or <code>has</code> will be considered <code>PropTypes.bool</code></li>
        <li>If none of the above conditions is met <code>PropTypes.any</code> will be used</li>
      </ul>
    </div>
  ),
  actions: (
    <React.Fragment>
      <h5>With function component</h5>
      <ul className="text-muted">
        <li>Creates <code>propTypes</code> declaration below the component (if not present)</li>
        <li>Adds <code>propTypes</code> definitions for every prop used in component (if not present)</li>
        <li>Sorts <code>propTypes</code> definitions</li>
      </ul>

      <h5>With class component</h5>
      <ul className="text-muted">
        <li>Transforms <code>propTypes</code> declaration into a static class property (if present)</li>
        <li>Creates static <code>propTypes</code> declaration (if not present)</li>
        <li>Adds <code>propTypes</code> definitions for every prop used in component (if not present)</li>
        <li>Sorts <code>propTypes</code> definitions</li>
      </ul>
    </React.Fragment>
  ),
  worksWith: [ 'arrow', 'function', 'class', 'hoc-arrow', 'hoc-function', 'hoc-class' ],
  dependencies: [
    { name: 'react', type: 'always' },
    { name: 'prop-types', type: 'always' }
  ],
  examples: [
    example1,
    example2
  ],
  configuration: [
    'end-of-line',
    'indent'
  ]
};

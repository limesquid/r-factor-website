import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import example1 from './example1';
import example2 from './example2';
import example3 from './example3';

export default {
  id: 'convert-to-class-component',
  name: 'Convert to class component',
  summary: (
    <div>
      Turns a functional component into a class component.
    </div>
  ),
  actions: (
    <ul className="text-muted">
      <li>Transforms function component into a class</li>
      <li>
        Adds component superclass (see
        {' '}
        <LinkContainer to="/documentation/component-superclass">
          <a href="/documentation/component-superclass">
            component-superclass
          </a>
        </LinkContainer>
        {' '}
        configuration option) import statement (if not present)
      </li>
      <li>Transforms <code>propTypes</code> declaration into a static class property (if present)</li>
      <li>Transforms <code>defaultProps</code> declaration into a static class property (if present)</li>
    </ul>
  ),
  worksWith: [ 'arrow', 'function' ],
  dependencies: [
    { name: 'react', type: 'always' }
  ],
  examples: [
    example1,
    example2,
    example3
  ],
  configuration: [
    'component-superclass',
    'end-of-line',
    'indent',
    'semicolons'
  ]
};

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export default {
  id: 'toggle-component-type',
  name: 'Toggle component type',
  summary: (
    <span>
      Turns your component to either class or functional component of type defined in settings.
      It uses "<i>Convert to X</i>" refactorings.
    </span>
  ),
  actions: (
    <React.Fragment>
      <h5>On functional component</h5>
      <ul className="text-muted">
        <li>
          Performs
          {' '}
          <LinkContainer to="/documentation/convert-to-class-component">
            <a href="/documentation/convert-to-class-component">
              Convert to class component
            </a>
          </LinkContainer>
        </li>
      </ul>

      <h5>On class component</h5>
      <ul className="text-muted">
        <li>
          Performs either
          {' '}
          <LinkContainer to="/documentation/convert-to-arrow-component">
            <a href="/documentation/convert-to-arrow-component">
              Convert to arrow component
            </a>
          </LinkContainer>
          {' or '}
          <LinkContainer to="/documentation/convert-to-function-component">
            <a href="/documentation/convert-to-function-component">
              Convert to function component
            </a>
          </LinkContainer>
          {' '}
          based on
          {' '}
          <LinkContainer to="/documentation/functional-component-type">
            <a href="/documentation/functional-component-type">
              Functional component type
            </a>
          </LinkContainer>
          {' '}
          setting
        </li>
      </ul>
    </React.Fragment>
  ),
  worksWith: [ 'arrow', 'class', 'function' ],
  examples: [],
  configuration: [
    'functional-component-type'
  ]
};

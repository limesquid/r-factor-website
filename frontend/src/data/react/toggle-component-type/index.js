import React from 'react';
import Link from 'components/link';

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
          <Link href="/documentation/convert-to-class-component" label="Convert to class component" />
        </li>
      </ul>

      <h5>On class component</h5>
      <ul className="text-muted">
        <li>
          Performs either
          {' '}
          <Link href="/documentation/convert-to-arrow-component" label="Convert to arrow component" />
          {' or '}
          <Link href="/documentation/convert-to-function-component" label="Convert to function component" />
          {' '}
          based on
          {' '}
          <Link href="/documentation/functional-component-type" label="Functional component type" />
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

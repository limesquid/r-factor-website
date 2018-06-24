import React from 'react';

export default [
  {
    id: 'add-classname',
    name: 'Add className',
    description: (
      <div>
        Adds className prop to a component and applies it for its root JSX element.
        Uses <code>classNames</code> if necessary.
      </div>
    )
  },
  {
    id: 'convert-to-class-component',
    name: 'Convert to class component',
    description: (
      <div>
        Turns a functional component into a class component.
      </div>
    )
  },
  {
    id: 'convert-to-functional-component-arrow',
    name: 'Convert to functional component (arrow)',
    description: (
      <div>
        Turns a class component into a functional component defined as an arrow function.
      </div>
    )
  },
  {
    id: 'convert-to-functional-component-function',
    name: 'Convert to functional component (function)',
    description: (
      <div>
        Turns a class component into a functional component defined as a function.
      </div>
    )
  },
  {
    id: 'generate-prop-types',
    name: 'Generate propTypes',
    description: (
      <div>
        Adds missing <code>propTypes</code> definitions for every prop used in a component.
      </div>
    )
  },
  {
    id: 'move-default-props-out-of-class',
    name: 'Move defaultProps out of class',
    description: (
      <div>
        Moves static <code>defaultProps</code> definition out of a class component.
      </div>
    )
  },
  {
    id: 'move-default-props-to-class',
    name: 'Move defaultProps to class',
    description: (
      <div>
        Turns a plain <code>defaultProps</code> assignment into a static property in a class component.
      </div>
    )
  },
  {
    id: 'move-prop-types-out-of-class',
    name: 'Move propTypes out of class',
    description: (
      <div>
        Moves static <code>propTypes</code> definition out of a class component.
      </div>
    )
  },
  {
    id: 'move-prop-types-to-class',
    name: 'Move propTypes to class',
    description: (
      <div>
        Turns a plain <code>propTypes</code> assignment into a static property in a class component.
      </div>
    )
  },
  {
    id: 'sort-attributes',
    name: 'Sort attributes in objects',
    description: (
      <div>
        Sorts attributes of every object literal in a selection alphabetically.
        Attributes prefixed with <code>on</code> will appear at the end.
      </div>
    )
  },
  {
    id: 'sort-imports',
    name: 'Sort imports',
    description: (
      <div>
        Sorts import statements according to an order defined in settings.
        You can choose an alphabetic order or specify a fixed order.
      </div>
    )
  },
  {
    id: 'toggle-component-type',
    name: 'Toggle component type',
    description: (
      <div>
        Turns your component to either class or functional component of type defined in settings.
        It uses "<i>Convert to X</i>" refactorings.
      </div>
    )
  }
];

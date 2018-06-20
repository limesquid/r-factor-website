import React from 'react';

export const reduxFeatures = [
  {
    id: 'connect',
    name: 'Connect component',
    description: (
      <div>
        Connects a component to redux store and generates
        both <code>mapStateToProps</code> & <code>mapDispatchToProps</code>.
      </div>
    )
  },
  {
    id: 'connect-with-map-dispatch',
    name: 'Connect component (mapDispatchToProps)',
    description: (
      <div>
        Connects a component to redux store and generates <code>mapDispatchToProps</code> only.
      </div>
    )
  },
  {
    id: 'connect-with-map-state',
    name: 'Connect component (mapStateToProps)',
    description: (
      <div>
        Connects a component to redux store and generates <code>mapStateToProps</code> only.
      </div>
    )
  },
  {
    id: 'disconnect',
    name: 'Disconnect component',
    description: (
      <div>
        Disconnects a component from redux store and removes
        both <code>mapStateToProps</code> & <code>mapDispatchToProps</code>.
      </div>
    )
  },
  {
    id: 'disconnect-map-state',
    name: 'Disconnect component (mapStateToProps)',
    description: (
      <div>
        Disconnects <code>mapStateToProps</code> from a component connected to a redux store.
        Disconnects completely if possible.
      </div>
    )
  },
  {
    id: 'disconnect-map-dispatch',
    name: 'Disconnect component (mapDispatchToProps)',
    description: (
      <div>
        Disconnects <code>mapDispatchToProps</code> from a component connected to a redux store.
        Disconnects completely if possible.
      </div>
    )
  }
];

export const reactFeatures = [
  {
    id: 'add-classname',
    name: 'Add className prop',
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
    id: 'convert-to-functional-component',
    name: 'Convert to functional component',
    description: (
      <div>
        Turns a class component into a functional component.
      </div>
    )
  },
  {
    id: 'generate-prop-types',
    name: 'Generate component propTypes',
    description: (
      <div>
        Adds missing <code>propTypes</code> definitions for every prop used in component.
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
    id: 'move-prop-types-out-of-class',
    name: 'Move propTypes out of class',
    description: (
      <div>
        Moves static <code>propTypes</code> definition out of a class component.
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
  }
];

import React from 'react';

export default [
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

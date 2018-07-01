import React from 'react';
import example1 from './example1';

export default {
  id: 'sort-attributes',
  name: 'Sort attributes in objects',
  summary: (
    <span>
      Sorts attributes of every object literal in a selection alphabetically.
      Attributes prefixed with <code>on</code> will appear at the end.
    </span>
  ),
  description: (
    <p>
      Works with nested objects. Keeps multiline objects multiline, and inline objects inline.
    </p>
  ),
  worksWith: [ 'object-literal' ],
  examples: [
    example1
  ],
  configuration: [
    'end-of-line',
    'indent'
  ]
};

import React from 'react';
import example1 from './example1';
import example2 from './example2';
import example3 from './example3';

export default {
  id: 'add-classname',
  name: 'Add className',
  summary: (
    <span>
      Adds className prop to a component and applies it to its root JSX element.
      Uses <code>classNames</code> if necessary.
    </span>
  ),
  actions: (
    <ul className="text-muted">
      <li>Adds <code>prop-types</code> import statement (if not present)</li>
      <li>Adds <code>propTypes</code> definition to the component (if not present)</li>
      <li>Adds <code>className</code> to <code>propTypes</code> definition (if not present)</li>
      <li>
        If <code>propTypes</code> were sorted, sorting will be kept.
        If not, new <code>className</code> will be added at the end.
      </li>
      <li>Declares <code>className</code> in render body or functional component arguments (if not present)</li>
      <li>
        If <code>className</code> was declared in already existing destructuring statement,
        identifiers in that statement will be sorted
      </li>
      <li>Uses <code>className</code> on root JSX element (if not present)</li>
      <li>
        If root JSX element already has <code>className</code> defined its value will
        be preserved by applying <code>classNames</code> function
      </li>
      <li>Adds <code>classnames</code> import statement if necessary</li>
    </ul>
  ),
  worksWith: [ 'arrow', 'function', 'class', 'hoc-arrow', 'hoc-function', 'hoc-class' ],
  dependencies: [
    { name: 'react', type: 'always' },
    { name: 'prop-types', type: 'always' },
    { name: 'classnames', type: 'sometimes' }
  ],
  examples: [
    example1,
    example2,
    example3
  ],
  configuration: [
    'end-of-line',
    'indent',
    'quotes',
    'semicolons',
    'trailing-commas'
  ],
  calculator: {
    manualDuration: 30,
    dailyCount: 10
  }
};

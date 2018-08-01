import React, { Fragment } from 'react';
import Link from 'components/link';
import example1 from './example1';
import example2 from './example2';
import example3 from './example3';

export default {
  id: 'sort-imports',
  name: 'Sort imports',
  summary: (
    <span>
      Sorts <code>import</code> statements according to an order defined in settings.
      You can choose an alphabetic order or specify a fixed order.
    </span>
  ),
  description: (
    <Fragment>
      <p>
        See <Link href="/documentation/modules-order" label="Modules order" /> for configuration.
        Keeps grouped <code>import</code> statements together. Does not work with <code>require</code>.
      </p>
      <p>
        If your <Link href="/documentation/quotes" label="Quotes" /> settings is set
        to <code>backtick</code>, <code>single</code> quotes
        will be used instead (imports with <code>backtick</code> are not valid JavaScript).
      </p>
    </Fragment>
  ),
  worksWith: [ 'import-statement' ],
  examples: [
    example1,
    example2,
    example3
  ],
  configuration: [
    'end-of-line',
    'indent',
    'modules-order',
    'semicolons',
    'quotes',
    'trailing-commas'
  ]
};

import React, { Fragment } from 'react';

const Promises = () => (
  <Fragment>
    <h1>R-Factor promises to</h1>
    <ul className="text-muted mb-4">
      <li>Try its best to not break your code</li>
      <li>Try its best to keep your formatting</li>
      <li>Refactor reasonably sized files in reasonable time</li>
      <li>
        Stick to
        {' '}
        <a href="https://en.wikipedia.org/wiki/Garbage_in,_garbage_out">garbage in, garbage out</a>
        {' '}
        rule
      </li>
      <li>Prefer the fanciest, sweetest syntax possible (think ES6+)</li>
    </ul>
  </Fragment>
);

export default Promises;

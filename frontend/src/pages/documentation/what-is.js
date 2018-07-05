import React, { Fragment } from 'react';
import Link from 'components/link';
import { transparentLogoUrl } from 'data';

const IMAGE_SIZE = 160;

const WhatIs = () => (
  <Fragment>
    <h1>What is R-Factor?</h1>
    <div className="d-flex justify-content-center my-4">
      <img
        alt="R-Factor"
        title="R-Factor"
        src={transparentLogoUrl}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE} />
    </div>
    <div className="text-muted mb-4">
      <p>
        R-Factor is an automated refactoring tool for JavaScript designed
        to help developers who work with React & Redux.
        It features automated transformations for very common code manipulations
        that React developers perform manually dozens of times every day. If you do not
        use Redux you are still going to get a lot of value from React refactorings.
      </p>
      <p>
        If you value your time, you'll love it.
        We know it's awesome because we use it too.
        In fact, after we finished implementing proof of concept of the very first transformation,
        we kept scratching our heads thinking "why didn't we do this earlier?".
      </p>
      <p>
        While our initial goal was to provide React & Redux refactorings only, some cool
        side effects appeared along the way. That is why now you can also enjoy features like
        {' '}
        <Link href="/documentation/sort-imports" label="Sort imports" />
        {' & '}
        <Link href="/documentation/sort-object-attributes" label="Sort object attributes" />
        .
      </p>
      <p>
        As I am writing this we have over 30 ideas for other features, which would take months
        to implement. And yes, some of them go beyond React & Redux. First, we want to see how much
        interest is this tool going to get.
      </p>
    </div>
    <div>
      <h5>R-Factor aims to</h5>
      <ul className="text-muted mb-4">
        <li>Not break your code</li>
        <li>
          Keep your formatting
          (but remember: <a href="https://en.wikipedia.org/wiki/Garbage_in,_garbage_out">garbage in, garbage out</a>)
        </li>
        <li>Refactor reasonably sized files in reasonable time</li>
        <li>Support & prefer the fanciest, sweetest syntax possible (think ES6+)</li>
      </ul>
    </div>
  </Fragment>
);

export default WhatIs;

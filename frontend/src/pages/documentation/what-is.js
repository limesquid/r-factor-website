import React, { Fragment } from 'react';
import Link from 'components/link';
import { randyUrl, transparentLogoUrl } from 'data';

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
        As I am writing this we have over <span className="text-info">30</span> ideas for other features, which would take months
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
    <div>
      <h5>Quality</h5>
      <div className="text-muted mb-4">
        <p>
          R-Factor has been thoroughly tested. We have <span className="text-info">100%</span> test coverage.
          Every statement, every branch, every function & every line is covered.
          We have ran this tool on over <span className="text-info">50</span> different projects with different settings.
          We've gathered feedback from a few idependent developers. It's still just a software, but we feel we did our best.
        </p>
        <img src={randyUrl} alt="One of the testers after using R-Factor" title="One of the testers after using R-Factor" style={{ width: '100%', margin: '8px 0' }} />
        <p className="text-center">One of the testers after using R-Factor</p>
      </div>
    </div>
  </Fragment>
);

export default WhatIs;

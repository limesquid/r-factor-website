import React, { Fragment } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { transparentLogoUrl } from 'data';

const IMAGE_SIZE = 160;

const WhatIs = () => (
  <Fragment>
    <h1>What is R-Factor?</h1>
    <div className="d-flex justify-content-center my-4">
      <img
        alt="R-Factor"
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
        <LinkContainer to="/documentation/sort-imports">
          <a href="/documentation/sort-imports">Sort imports</a>
        </LinkContainer>
        {' & '}
        <LinkContainer to="/documentation/sort-object-attributes">
          <a href="/documentation/sort-object-attributes">Sort object attributes</a>
        </LinkContainer>
        {' .'}
      </p>
      <p>
        As I am writing this we have over 30 ideas for other features, which would take months
        to implement. And yes, some of them go beyond React & Redux. First, we want to see how much
        interest is this tool going to get.
      </p>
    </div>
  </Fragment>
);

export default WhatIs;

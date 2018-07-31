import React, { Fragment } from 'react';
import { randyUrl } from 'data';

const Quality = () => (
  <Fragment>
    <h1>Quality</h1>
    <div className="text-muted mb-4">
      <p>
        R-Factor has been thoroughly tested. We have <span className="text-info">100%</span> test coverage.
        Every statement, every branch, every function & every line is covered.
        We have ran this tool on over <span className="text-info">50</span> different
        projects with different settings. We've gathered feedback from a few idependent developers.
        It's still just a software, but we feel we did our best.
      </p>
      <img
        src={randyUrl}
        alt="One of the testers after using R-Factor"
        title="One of the testers after using R-Factor"
        style={{
          width: '100%',
          margin: '8px 0'
        }} />
      <p className="text-center">One of our testers after using R-Factor</p>
    </div>
  </Fragment>
);

export default Quality;

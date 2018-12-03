import React, { Fragment } from 'react';
import { randyUrl } from 'data';

const IMAGE_DESCRIPTION = 'One of our testers after using R-Factor';

const Quality = () => (
  <Fragment>
    <h1>Quality</h1>
    <div className="text-muted mb-4">
      <p>
        R-Factor has been thoroughly tested. We have <span className="text-body">100%</span> test coverage.
        Every statement, every branch, every function & every line is covered.
        {' '}<span className="text-body">836</span> test cases, all <span className="text-success">green</span>!
        We have run this tool on over <span className="text-body">20</span> different
        projects with different settings. We've gathered feedback from a few idependent developers.
        It's still just software, but we feel we did pretty damn good.
      </p>
      <p>
        It's worth noting that not once have we experienced performance issues.
      </p>
      <img
        className="my-2"
        src={randyUrl}
        alt={IMAGE_DESCRIPTION}
        title={IMAGE_DESCRIPTION}
        style={{ width: '100%' }} />
      <p className="text-center">{IMAGE_DESCRIPTION}</p>
    </div>
  </Fragment>
);

export default Quality;

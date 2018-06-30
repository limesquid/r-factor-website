import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Installation = () => (
  <Fragment>
    <Helmet>
      <title>R-Factor - Installation</title>
    </Helmet>
    <h1>Installation</h1>

    <h5>Prerequisites</h5>
    <ul className="text-muted mb-4">
      <li>
        You must have Node.js <code>6.0.0</code> or later installed.
      </li>
      <li>
        <code>node</code> executable
        must be available in your <code>PATH</code> environment variable.
      </li>
    </ul>

    <h5>Installation</h5>
    <div className="text-muted mb-4">
      TODO
    </div>
  </Fragment>
);

export default Installation;

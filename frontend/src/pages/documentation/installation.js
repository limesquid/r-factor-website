import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Link from 'components/link';

const Installation = () => (
  <Fragment>
    <Helmet>
      <title>R-Factor - Installation</title>
    </Helmet>
    <h1>Installation</h1>

    <h5>Prerequisites</h5>
    <ul className="text-muted mb-4">
      <li>
        You must have <a href="https://nodejs.org/en/download/">Node.js</a> <code>6.0.0</code> or later installed.
        The newer the better.
      </li>
      <li>
        You must have R-Factor <Link href="/purchase" label="license key" />.
      </li>
    </ul>

    <h5>Instructions</h5>
    <ol className="text-muted mb-4">
      <li>
        Download R-Factor plugin for your editor from our <Link href="/download" label="download page" />.
      </li>
      <li>
        TODO
      </li>
    </ol>
  </Fragment>
);

export default Installation;

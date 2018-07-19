import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Link from 'components/link';

const DosAndDonts = () => (
  <Fragment>
    <Helmet>
      <title>R-Factor - Dos and don'ts</title>
    </Helmet>

    <h1>Dos and don'ts</h1>

    <h5>Do</h5>
    <ul className="text-muted mb-4">
      <li>Use the most recent JavaScript features</li>
      <li>Commit before you refactor</li>
      <li>
        <Link href="/support" label="Submit ideas & report bugs" />
      </li>
      <li>
        Compensate for missing R-Factor configuration with
        {' '}
        <a href="https://eslint.org/">ESLint</a>
        {' '}
        <a href="https://eslint.org/docs/user-guide/migrating-from-jscs#--fix">
          <code>--fix</code>
        </a>
        {' '}
        command line option
      </li>
      <li>Use <a href="https://prettier.io/">Prettier</a></li>
    </ul>

    <h5>Don't</h5>
    <ul className="text-muted mb-4">
      <li>Refactor invalid JavaScript</li>
      <li>Refactor code formatted against provided configuration</li>
      <li>Declare multiple React components in a single file</li>
      <li>Try any other foolish constructions</li>
    </ul>
  </Fragment>
);

export default DosAndDonts;

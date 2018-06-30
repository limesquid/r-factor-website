import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Link from 'components/link';

const Commandments = () => (
  <Fragment>
    <Helmet>
      <title>R-Factor - User commandments</title>
    </Helmet>
    <h1>User commandments</h1>
    <ul className="text-muted mb-4">
      <li>Thou shalt not refactor invalid JavaScript</li>
      <li>Thou shalt not refactor code formatted against provided configuration</li>
      <li>Thou shalt not declare multiple React components in a single file</li>
      <li>Thou shalt not refactor any other foolish constructions</li>
      <li>Use the most recent JavaScript features</li>
      <li>Commit before you refactor</li>
      <li>
        <Link href="/support" label="Report your ideas & bugs" />
      </li>
    </ul>
  </Fragment>
);

export default Commandments;

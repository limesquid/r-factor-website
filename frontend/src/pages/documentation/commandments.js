import React, { Fragment } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const Commandments = () => (
  <Fragment>
    <h1>User commandments</h1>
    <ul className="text-muted mb-4">
      <li>Thou shalt not refactor invalid JavaScript</li>
      <li>Thou shalt not refactor code formatted against provided configuration</li>
      <li>Thou shalt not declare multiple React components in a single file</li>
      <li>Thou shalt not refactor any other foolish constructions</li>
      <li>Use the most recent JavaScript features</li>
      <li>Commit before you refactor</li>
      <li>
        <LinkContainer to="/support">
          <a href="/support">Report your ideas & bugs</a>
        </LinkContainer>
      </li>
    </ul>
  </Fragment>
);

export default Commandments;

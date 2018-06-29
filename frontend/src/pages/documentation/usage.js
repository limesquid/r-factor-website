import React, { Fragment } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const Usage = () => (
  <Fragment>
    <h1>Usage instructions</h1>
    <ul className="text-muted mb-4">
      <li>Refactoring will be performed on your selection or else on an entire file</li>
      <li>Selection must be a valid JavaScript Program (e.g. <code>{'{ a: 1, b: 2 }'}</code> will not do!)</li>
      <li>
        You can use <a href="https://astexplorer.net/">astexplorer.net</a> with <code>babylon7</code> parser
        to validate your code before
        you <LinkContainer to="/support"><a href="/support">submit an issue</a></LinkContainer>
      </li>
      <li>
        Code is refactored on your machine. If you use the plugin, no code will ever be
        transmitted over the network. The plugin works offline. You're safe.
      </li>
      <li>
        Our online <LinkContainer to="/try"><a href="/try">Try it</a></LinkContainer> tool
        however does send your code to our server. But we do not store it. But we could have.
        That's why you should use it for evaluation purposes with some dummy code only.
      </li>
    </ul>
  </Fragment>
);

export default Usage;

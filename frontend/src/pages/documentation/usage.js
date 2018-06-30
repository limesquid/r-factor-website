import React, { Fragment } from 'react';
import Link from 'components/link';

const Usage = () => (
  <Fragment>
    <h1>Usage instructions</h1>
    <ul className="text-muted mb-4">
      <li>Refactoring will be performed on your selection or else on an entire file</li>
      <li>Selection must be a valid JavaScript Program (e.g. <code>{'{ a: 1, b: 2 }'}</code> will not do!)</li>
      <li>
        You can use <a href="https://astexplorer.net/">astexplorer.net</a> with <code>babylon7</code> parser
        to validate your code before
        you <Link href="/support" label="submit an issue" />
      </li>
      <li>
        Code is refactored on your machine. When you use the plugin, no code is ever
        transmitted over the network. The plugin works offline. You're safe.
      </li>
      <li>
        Our online <Link href="/try" label="Try it" /> tool
        however does send your code to our server. But we do not store it. But we could have.
        That's why you should use it for evaluation purposes with some dummy code only.
      </li>
    </ul>
  </Fragment>
);

export default Usage;

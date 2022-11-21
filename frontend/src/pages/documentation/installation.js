import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Icon from 'components/icon';

const Installation = () => (
  <Fragment>
    <Helmet>
      <title>R-Factor - Installation</title>
    </Helmet>
    <h1>Installation</h1>

    <h3>Prerequisites</h3>
    <ul className="text-muted mb-4">
      <li>
        You must have{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nodejs.org/en/download/">
          Node.js
        </a>
        {' '}<code>8.0.0</code> or later installed. The newer the better.
      </li>
    </ul>

    <h3>Instructions</h3>
    <p className="text-muted">
      In all instructions below <code>~</code> refers to your{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://en.wikipedia.org/wiki/Home_directory">
        home directory
      </a>
      .
    </p>

    <h4>Atom</h4>
    <ol className="text-muted mb-4">
      <li>
        Extract <a href="https://r-factor.org/static/r-factor-atom.zip">r-factor-atom.zip</a>
        {' '}to <code>~/.atom/packages/</code>. Create this directory if it doesn't exist.
      </li>
      <li>
        Restart Atom.
      </li>
    </ol>

    <h4>Sublime Text 3</h4>
    <ol className="text-muted mb-4">
      <li>
        In Sublime, go to <code>Preferences</code> <Icon name="arrow-right" /> <code>Browse Packages</code>.
      </li>
      <li>
        Extract <a href="https://r-factor.org/static/r-factor-sublime.zip">r-factor-sublime.zip</a> there.
      </li>
    </ol>

    <h4>Visual Studio Code</h4>
    <ol className="text-muted mb-4">
      <li>
        Extract <a href="https://r-factor.org/static/r-factor-vscode.zip">r-factor-vscode.zip</a>
        {' '}to <code>~/.vscode/extensions/</code>. Create this directory if it doesn't exist.
      </li>
      <li>
        Restart Visual Studio Code.
      </li>
    </ol>
  </Fragment>
);

export default Installation;

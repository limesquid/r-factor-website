import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Icon from 'components/icon';
import Link from 'components/link';

const Installation = () => (
  <Fragment>
    <Helmet>
      <title>R-Factor - Installation</title>
    </Helmet>
    <h1>Installation</h1>

    <h3>Prerequisites</h3>
    <ul className="text-muted mb-4">
      <li>
        You must have&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nodejs.org/en/download/">
          Node.js
        </a>
        &nbsp;<code>6.0.0</code> or later installed. The newer the better.
      </li>
      <li>
        You must have R-Factor <Link href="/purchase" label="license key" />.
      </li>
    </ul>

    <h3>Instructions</h3>
    <p className="text-muted">
      In all instructions below <code>~</code> refers to your&nbsp;
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
        Extract <a href="https://r-factor.io/static/r-factor-atom.zip">r-factor-atom.zip</a>
        &nbsp;to <code>~/.atom/packages/</code>. Create this directory if it doesn't exist.
      </li>
      <li>
        Restart Atom.
      </li>
      <li>
        Open up your&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://flight-manual.atom.io/getting-started/sections/atom-basics/#command-palette">
          command palette
        </a>
        , type <code>R-Factor: Enter License Key</code> and hit <code>Enter</code>.
      </li>
      <li>
        Paste your license key and hit <code>Enter</code>.
      </li>
    </ol>

    <h4>Sublime Text 3</h4>
    <ol className="text-muted mb-4">
      <li>
        In Sublime, go to <code>Preferences</code> <Icon name="arrow-right" /> <code>Browse Packages</code>.
      </li>
      <li>
        Extract <a href="https://r-factor.io/static/r-factor-sublime.zip">r-factor-sublime.zip</a> there.
      </li>
      <li>
        In Sublime, go to <code>Preferences</code> <Icon name="arrow-right" /> <code>Package Settings</code>
        &nbsp;<Icon name="arrow-right" /> <code>R-Factor</code>
        &nbsp;<Icon name="arrow-right" /> <code>Enter license</code>.
      </li>
      <li>
        Paste your license key and hit <code>Enter</code>.
      </li>
    </ol>

    <h4>Visual Studio Code</h4>
    <ol className="text-muted mb-4">
      <li>
        Extract <a href="https://r-factor.io/static/r-factor-vscode.zip">r-factor-vscode.zip</a>
        &nbsp;to <code>~/.vscode/extensions/</code>. Create this directory if it doesn't exist.
      </li>
      <li>
        Restart Visual Studio Code.
      </li>
      <li>
        Open up your&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette">
          command palette
        </a>
        , type <code>R-Factor: Enter License Key</code> and hit <code>Enter</code>.
      </li>
      <li>
        Paste your license key and hit <code>Enter</code>.
      </li>
    </ol>
  </Fragment>
);

export default Installation;

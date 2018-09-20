import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Icon from 'components/icon';
import Link from 'components/link';

const Usage = () => (
  <Fragment>
    <Helmet>
      <title>R-Factor - Usage</title>
    </Helmet>

    <h1>Usage</h1>

    <h3>Instructions</h3>
    <ul className="text-muted mb-4">
      <li>Refactoring will be performed on your selection or else on an entire file</li>
      <li>Selection must be a valid JavaScript Program (e.g. <code>{'{ a: 1, b: 2 }'}</code> will not do!)</li>
      <li>
        You can use <a href="https://astexplorer.net/">astexplorer.net</a> with <code>babylon7</code> parser
        to validate your code before
        you <Link href="/support" label="submit an issue" />
      </li>
      <li>If refactoring cannot be performed nothing will happen to your code</li>
      <li>If refactoring can be partially performed it may be partially performed</li>
      <li>
        Code is refactored on your machine. When you use the plugin, no code is ever
        transmitted over the network. The plugin works offline. You're safe.
      </li>
      <li>
        Our online <Link href="/try" label="Try it" /> tool
        however does send your code to our server. But we do not store it. But we could have.
        That's why you should use it for evaluation purposes with some dummy code only.
      </li>
      <li>
        Every refactoring is available as a command in the
        {' '}
        <a href="http://docs.sublimetext.info/en/latest/extensibility/command_palette.html">
          Command Palette
        </a>
        .
        {/* TODO: add links to other editors */}
      </li>
      <li>
        Command name corresponts to a refactoring name, but is prefixed with <code>R-Factor: </code>.
        So for example
        {' '}
        <Link href="/documentation/convert-to-class-component" label="Convert to class component" />
        {' '}
        refactoring will appear as <code>R-Factor: Convert to class component</code>.
        Remember to use fuzzy search, so that you do not have to type the whole refactoring
        name - <code>rfctcc</code> will suffice.
      </li>
    </ul>

    <h3>Configuration</h3>
    <p className="text-muted">
      You can use our online
      {' '}
      <Link href="/try" label="Try it" /> tool to generate a config file.
    </p>

    <h4>Atom</h4>
    <p className="text-muted">
      TODO
    </p>

    <h4>Sublime Text 3</h4>
    <p className="text-muted">
      Open up <code>Preferences</code> <Icon name="arrow-right" /> <code>Package Settings</code>
      {' '}
      <Icon name="arrow-right" /> <code>R-Factor</code> <Icon name="arrow-right" />
      {' '}
      <code>Settings - User</code> in Sublime menu.
    </p>

    <h4>VSCode</h4>
    <p className="text-muted">
      TODO
    </p>
  </Fragment>
);

export default Usage;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EndOfLine from './end-of-line';
import Indent from './indent';
import Quotes from './quotes';
import Semicolons from './semicolons';
import Superclass from './superclass';

class Settings extends Component {
  static propTypes = {
    settings: PropTypes.object,
    onChange: PropTypes.func
  };

  onEndOfLineChange = (endOfLine) => this.props.onChange({
    ...this.props.settings,
    'end-of-line': endOfLine
  });

  onIndentChange = (indent) => this.props.onChange({
    ...this.props.settings,
    indent
  });

  onQuotesChange = (quotes) => this.props.onChange({
    ...this.props.settings,
    quotes
  });

  onSemicolonsChange = (semicolons) => this.props.onChange({
    ...this.props.settings,
    semicolons
  });

  onSuperclassChange = (superclass) => this.props.onChange({
    ...this.props.settings,
    'component-superclass': superclass
  });

  render() {
    const { settings } = this.props;

    return (
      <div>
        <Superclass value={settings['component-superclass']} onChange={this.onSuperclassChange} />
        <EndOfLine value={settings['end-of-line']} onChange={this.onEndOfLineChange} />
        <Indent value={settings.indent} onChange={this.onIndentChange} />
        <Quotes value={settings.quotes} onChange={this.onQuotesChange} />
        <Semicolons value={settings.semicolons} onChange={this.onSemicolonsChange} />
      </div>
    );
  }
}

export default Settings;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import EndOfLine from './end-of-line';
import FunctionalComponentType from './functional-component-type';
import Indent from './indent';
import ModulesOrder from './modules-order';
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

  onFunctionalComponentTypeChange = (functionalComponent) => this.props.onChange({
    ...this.props.settings,
    'functional-component-type': functionalComponent
  });

  onIndentChange = (indent) => this.props.onChange({
    ...this.props.settings,
    indent
  });

  onModulesOrderChange = (modulesOrder) => this.props.onChange({
    ...this.props.settings,
    'modules-order': modulesOrder
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
      <Row>
        <Col>
          <Indent
            value={settings.indent}
            onChange={this.onIndentChange} />
        </Col>
        <Col>
          <Quotes
            value={settings.quotes}
            onChange={this.onQuotesChange} />
        </Col>
        <Col>
          <EndOfLine
            value={settings['end-of-line']}
            onChange={this.onEndOfLineChange} />
        </Col>
        <Col>
          <Semicolons
            value={settings.semicolons}
            onChange={this.onSemicolonsChange} />
        </Col>
        <Col>
          <Superclass
            value={settings['component-superclass']}
            onChange={this.onSuperclassChange} />
        </Col>
        <Col>
          <FunctionalComponentType
            value={settings['functional-component-type']}
            onChange={this.onFunctionalComponentTypeChange} />
        </Col>
        <Col>
          <ModulesOrder
            value={settings['modules-order']}
            onChange={this.onModulesOrderChange} />
        </Col>
      </Row>
    );
  }
}

export default Settings;

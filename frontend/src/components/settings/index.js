import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import EndOfLine from './end-of-line';
import FunctionalComponentType from './functional-component-type';
import Indent from './indent';
import MapDispatchToPropsPreferObject from './map-dispatch-to-props-prefer-object';
import ModulesOrder from './modules-order';
import Quotes from './quotes';
import Semicolons from './semicolons';
import Superclass from './superclass';
import TrailingCommas from './trailing-commas';

const SETTINGS = [
  { name: 'indent', Component: Indent },
  { name: 'quotes', Component: Quotes },
  { name: 'end-of-line', Component: EndOfLine },
  { name: 'map-dispatch-to-props-prefer-object', Component: MapDispatchToPropsPreferObject },
  { name: 'semicolons', Component: Semicolons },
  { name: 'trailing-commas', Component: TrailingCommas },
  { name: 'component-superclass', Component: Superclass },
  { name: 'functional-component-type', Component: FunctionalComponentType },
  { name: 'modules-order', Component: ModulesOrder }
];

class Settings extends PureComponent {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  };

  createOnChange = (name) => (value) => this.props.onChange({
    ...this.props.settings,
    [name]: value
  });

  render() {
    const { settings } = this.props;

    return (
      <Row>
        {SETTINGS.map(({ name, Component }) => (
          <Col key={name}>
            <Component
              value={settings[name]}
              onChange={this.createOnChange(name)} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Settings;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import RadioSetting from 'components/radio-setting';
import TextSetting from 'components/text-setting';
import ModulesOrder from './modules-order';

const RADIO_SETTINGS = [
  require('data/configuration/indent').default,
  require('data/configuration/quotes').default,
  require('data/configuration/end-of-line').default,
  require('data/configuration/semicolons').default,
  require('data/configuration/trailing-commas').default,
  require('data/configuration/use-map-dispatch-to-props-shorthand').default,
  require('data/configuration/component-superclass').default,
  require('data/configuration/functional-component-type').default,
  require('data/configuration/svg-component-type').default,
  {
    ...require('data/configuration/modules-order').default,
    Component: ModulesOrder
  }
];

const TEXT_SETTINGS = [
  require('data/configuration/component-name-collision-pattern').default,
  require('data/configuration/map-dispatch-to-props-name').default,
  require('data/configuration/map-state-to-props-name').default,
  require('data/configuration/merge-props-name').default,
  require('data/configuration/default-component-name').default,
  require('data/configuration/default-hoc-component-name').default
];

class Settings extends PureComponent {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  };

  createOnChange = (id) => (value) => this.props.onChange({
    ...this.props.settings,
    [id]: value
  });

  render() {
    const { settings } = this.props;

    return (
      <Row>
        <Col lg={6}>
          <Row>
            {RADIO_SETTINGS.map(({ id, name, options, Component = RadioSetting }) => (
              <Col key={id}>
                <Component
                  id={id}
                  label={name}
                  options={options}
                  value={settings[id]}
                  onChange={this.createOnChange(id)} />
              </Col>
            ))}
          </Row>
        </Col>

        <Col lg={6}>
          <Row>
            {TEXT_SETTINGS.map(({ id, name, options, Component = TextSetting }) => (
              <Col key={id} xl={6} lg={12} md={6} sm={12}>
                <Component
                  id={id}
                  label={name}
                  options={options}
                  value={settings[id]}
                  onChange={this.createOnChange(id)} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Settings;

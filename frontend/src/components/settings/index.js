import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import RadioSetting from 'components/radio-setting';
import ModulesOrder from './modules-order';

const SETTINGS = [
  {
    ...require('data/configuration/indent').default,
    Component: RadioSetting
  },
  {
    ...require('data/configuration/quotes').default,
    Component: RadioSetting
  },
  {
    ...require('data/configuration/end-of-line').default,
    Component: RadioSetting
  },
  {
    ...require('data/configuration/semicolons').default,
    Component: RadioSetting
  },
  {
    ...require('data/configuration/trailing-commas').default,
    Component: RadioSetting
  },
  {
    ...require('data/configuration/use-map-dispatch-to-props-shorthand').default,
    Component: RadioSetting
  },
  {
    ...require('data/configuration/component-superclass').default,
    Component: RadioSetting
  },
  {
    ...require('data/configuration/functional-component-type').default,
    Component: RadioSetting
  },
  {
    ...require('data/configuration/modules-order').default,
    Component: ModulesOrder
  }
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
        {SETTINGS.map(({ id, name, options, Component }) => (
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
    );
  }
}

export default Settings;

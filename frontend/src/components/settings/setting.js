import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';

class Setting extends Component {
  static propTypes = {
    id: PropTypes.any,
    label: PropTypes.any,
    mapValue: PropTypes.func,
    options: PropTypes.object.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    mapValue: (value) => value
  };

  onChange = (event) => this.props.onChange(event.target.value);

  render() {
    const { id, label, mapValue, options, value } = this.props;

    return (
      <FormGroup>
        <Label for={id}>
          {label}
        </Label>

        <Input
          type="select"
          id={id}
          name={id}
          value={mapValue(value)}
          onChange={this.onChange}>
          {Object.keys(options).map((option) => (
            <option key={option} value={mapValue(option)}>
              {options[option]}
            </option>
          ))}
        </Input>
      </FormGroup>
    );
  }
}

export default Setting;

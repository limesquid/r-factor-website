import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'reactstrap/lib/FormGroup';
import CustomInput from 'reactstrap/lib/CustomInput';
import Label from 'reactstrap/lib/Label';

class RadioSetting extends Component {
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

  createOnChange = (value) => () => this.props.onChange(value);

  render() {
    const { id, label, mapValue, options, value } = this.props;

    return (
      <FormGroup>
        <Label for={id}>
          {label}
        </Label>

        <div className="text-muted">
          {Object.keys(options).map(mapValue).map((option) => (
            <CustomInput
              key={option}
              type="radio"
              checked={value === option}
              id={`${id}-${option}`}
              label={options[option]}
              name={id}
              value={option}
              onChange={this.createOnChange(option)} />
          ))}
        </div>
      </FormGroup>
    );
  }
}

export default RadioSetting;

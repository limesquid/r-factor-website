import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'reactstrap/lib/FormGroup';
import CustomInput from 'reactstrap/lib/CustomInput';
import Label from 'reactstrap/lib/Label';

class RadioSetting extends Component {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.any,
    label: PropTypes.any,
    options: PropTypes.array.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
  };

  createOnChange = (value) => () => this.props.onChange(value);

  render() {
    const { children, id, label, options, value } = this.props;

    return (
      <FormGroup>
        <Label className="text-nowrap" for={id}>
          {label}
        </Label>

        <div className="position-relative text-muted">
          {options.map((option) => (
            <CustomInput
              key={option.value}
              type="radio"
              checked={value === option.value}
              id={`${id}-${option.value}`}
              label={option.label}
              name={id}
              value={option.value}
              onChange={this.createOnChange(option.value)} />
          ))}

          {children}
        </div>
      </FormGroup>
    );
  }
}

export default RadioSetting;

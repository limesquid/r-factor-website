import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FormGroup from 'reactstrap/lib/FormGroup';
import CustomInput from 'reactstrap/lib/CustomInput';
import Label from 'reactstrap/lib/Label';
import './styles.css';

const valueToSlug = (value) => {
  if (typeof value === 'string') {
    return value.replace(/\r/g, '\\r').replace(/\n/g, '\\n');
  }

  return value;
};

class RadioSetting extends Component {
  static propTypes = {
    children: PropTypes.node,
    horizontal: PropTypes.bool,
    id: PropTypes.any,
    label: PropTypes.any,
    options: PropTypes.array.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired
  };

  createOnChange = (value) => () => this.props.onChange(value);

  render() {
    const { children, horizontal, id, label, options, value } = this.props;

    return (
      <FormGroup>
        <Label className="text-nowrap" for={`${id}-radio`}>
          {label}
        </Label>

        <div
          className={classNames(
            'options',
            'position-relative',
            'text-muted',
            {
              horizontal
            }
          )}>
          {options.map((option) => (
            <CustomInput
              key={option.value}
              className="text-nowrap"
              type="radio"
              checked={value === option.value}
              id={`${id}-${valueToSlug(option.value)}`}
              label={option.label}
              name={`${id}-radio`}
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

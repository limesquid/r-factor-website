import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormFeedback, Label, Input } from 'reactstrap';

const FormInput = ({ className, invalid, name, required, title, type, value, onChange }) => (
  <FormGroup className={className}>
    <Label className="text-nowrap">
      {title}
      {required && (<sup>{' '}<code>*</code>{' '}</sup>)}
    </Label>
    <Input
      type={type}
      name={name}
      invalid={invalid}
      value={value}
      onChange={onChange} />
    <FormFeedback>{title} is required</FormFeedback>
  </FormGroup>
);

FormInput.propTypes = {
  className: PropTypes.string,
  invalid: PropTypes.bool,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default FormInput;

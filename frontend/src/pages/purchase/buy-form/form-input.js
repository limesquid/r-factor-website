import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormFeedback, Label, Input } from 'reactstrap';

const FormInput = ({ children, invalid, name, required, title, type, value, onChange }) => (
  <FormGroup>
    <Label className="text-nowrap">
      {title}
      {required && (<sup>{' '}<code>*</code>{' '}</sup>)}
    </Label>
    <Input
      type={type}
      name={name}
      invalid={invalid}
      value={value}
      onChange={onChange}>
      {children}
    </Input>
    <FormFeedback>{title} is required</FormFeedback>
  </FormGroup>
);

FormInput.propTypes = {
  children: PropTypes.node,
  invalid: PropTypes.bool,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
};

export default FormInput;

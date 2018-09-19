import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormFeedback, Label, Input, Col } from 'reactstrap';

const FormInput = ({ invalid, name, required, title, type, value, onChange }) => (
  <FormGroup row key={name}>
    <Label sm={4} size="sm">
      {title}
      {required && (<sup>&nbsp;<code>*</code>&nbsp;</sup>)}
      :
    </Label>
    <Col sm={8}>
      <Input
        type={type}
        name={name}
        bsSize="sm"
        invalid={invalid}
        value={value}
        onChange={onChange} />
      <FormFeedback>{title} is required</FormFeedback>
    </Col>
  </FormGroup>
);

FormInput.propTypes = {
  invalid: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
};

export default FormInput;

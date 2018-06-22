import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';

const optionsLabels = {
  1: '1 space',
  2: '2 spaces',
  4: '4 spaces',
  8: '8 spaces'
};
const options = Object.keys(optionsLabels).map(Number);

class Indent extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  };

  onChange = (event) => this.props.onChange(Number(event.target.value));

  render() {
    return (
      <FormGroup>
        <Label for="indent-select">
          Indent
        </Label>

        <Input
          type="select"
          id="indent-select"
          name="indent-select"
          value={this.props.value}
          onChange={this.onChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {optionsLabels[option]}
            </option>
          ))}
        </Input>
      </FormGroup>
    );
  }
}

export default Indent;

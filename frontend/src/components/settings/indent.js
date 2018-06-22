import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import { reactFeatures, reduxFeatures } from 'data';

const optionsLabels = {
  ' ': '1 space',
  '  ': '2 spaces',
  '   ': '3 spaces',
  '    ': '4 spaces',
  '        ': '8 spaces',
  '\t': '1 tab',
  '\t\t': '1 tabs',
};
const options = Object.keys(optionsLabels);

class Indent extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  onChange = (event) => this.props.onChange(event.target.value);

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

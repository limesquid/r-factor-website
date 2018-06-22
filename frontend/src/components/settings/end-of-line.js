import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';

const optionsLabels = {
  '\n': 'Unix (\\n)',
  '\r\n': 'Windows (\\r\\n)'
};
const options = Object.keys(optionsLabels);

class EndOfLine extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  onChange = (event) => this.props.onChange(event.target.value);

  render() {
    return (
      <FormGroup>
        <Label for="end-of-line-select">
          End of line
        </Label>

        <Input
          type="select"
          id="end-of-line-select"
          name="end-of-line-select"
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

export default EndOfLine;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';

const optionsLabels = {
  single: 'Single (\')',
  double: 'Double (")',
  backtick: 'Backtick (`)'
};
const options = Object.keys(optionsLabels);

class Quotes extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  onChange = (event) => this.props.onChange(event.target.value);

  render() {
    return (
      <FormGroup>
        <Label for="quotes-select">
          Quotes
        </Label>

        <Input
          type="select"
          id="quotes-select"
          name="quotes-select"
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

export default Quotes;

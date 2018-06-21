import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import { reactFeatures, reduxFeatures } from 'data';

const allFeatures = [ ...reactFeatures, ...reduxFeatures ];

class RefactoringsSelect extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  onChange = (event) => this.props.onChange(event.target.value);

  render() {
    return (
      <FormGroup>
        <Label for="refactoring-select">
          Refactoring
        </Label>

        <Input
          type="select"
          id="refactoring-select"
          name="refactoring-select"
          value={this.props.value}
          onChange={this.onChange}>
          {allFeatures.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Input>
      </FormGroup>
    );
  }
}

export default RefactoringsSelect;

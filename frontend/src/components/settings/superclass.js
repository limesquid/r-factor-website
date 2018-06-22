import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';

const options = [ 'Component', 'PureComponent' ];

class Superclass extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  onChange = (event) => this.props.onChange(event.target.value);

  render() {
    return (
      <FormGroup>
        <Label for="component-superclass-select">
          Component superclass
        </Label>

        <Input
          type="select"
          id="component-superclass-select"
          name="component-superclass-select"
          value={this.props.value}
          onChange={this.onChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Input>
      </FormGroup>
    );
  }
}

export default Superclass;

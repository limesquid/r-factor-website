import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomInput from 'reactstrap/lib/CustomInput';
import FormGroup from 'reactstrap/lib/FormGroup';

class Semicolons extends Component {
  static propTypes = {
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  };

  onChange = (event) => this.props.onChange(event.target.checked);

  render() {
    return (
      <FormGroup>
        <CustomInput
          type="checkbox"
          checked={this.props.value}
          id="semicolons-input"
          label="Semicolons"
          inline
          onChange={this.onChange} />
      </FormGroup>
    );
  }
}

export default Semicolons;

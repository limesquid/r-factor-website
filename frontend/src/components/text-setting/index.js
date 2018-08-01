import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';

class TextSetting extends Component {
  static propTypes = {
    id: PropTypes.any,
    label: PropTypes.any,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired
  };

  onChange = (event) => this.props.onChange(event.target.value);

  render() {
    const { id, label, value } = this.props;

    return (
      <FormGroup>
        <Label className="text-nowrap" for={`${id}-text`}>
          {label}
        </Label>

        <div className="position-relative text-muted">
          <Input
            type="text"
            name={`${id}-text`}
            value={value}
            onChange={this.onChange} />
        </div>
      </FormGroup>
    );
  }
}

export default TextSetting;

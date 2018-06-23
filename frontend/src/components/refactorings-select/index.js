import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import { reactFeatures, reduxFeatures } from 'data';

const allFeatures = [ ...reactFeatures, ...reduxFeatures ];

class RefactoringsSelect extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  onChange = (event) => this.props.onChange(event.target.value);

  render() {
    const { disabled, value, onSubmit } = this.props;

    return (
      <Form inline>
        <FormGroup className="mb-4">
          <Input
            type="select"
            className="mr-2"
            disabled={disabled}
            id="refactoring-select"
            name="refactoring-select"
            value={value}
            onChange={this.onChange}>
            {allFeatures.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Input>

          <Button color="primary" disabled={disabled} onClick={onSubmit}>
            Refactor
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default RefactoringsSelect;

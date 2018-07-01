import React, { Component } from 'react';
import Button from 'reactstrap/lib/Button';
import Input from 'reactstrap/lib/Input';
import Modal from 'reactstrap/lib/Modal';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import RadioSetting from './radio-setting';
import PropTypes from 'prop-types';

const options = [
  { label: 'Alphabetic', value: 'alphabetic' },
  { label: 'Custom', value: 'custom' }
];

const customOrderToJson = (customOrder) => customOrder
  .split('\n')
  .map((value) => value.trim())
  .filter(Boolean);

class ModulesOrder extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      customOrder: props.value.join('\n'),
      isOpen: false
    };
  }

  onCustomOrderChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;
    this.setState({ customOrder: value });
    onChange(customOrderToJson(value));
  };

  onRadioChange = (modulesOrder) => {
    const { onChange } = this.props;
    if (modulesOrder === 'alphabetic') {
      onChange(modulesOrder);
    } else {
      console.log('asd');
      onChange(customOrderToJson(this.state.customOrder));
    }
  };

  onToggle = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { customOrder, isOpen } = this.state;
    const { value } = this.props;
    const isAlphabetic = value === 'alphabetic';
    const radioValue = isAlphabetic ? value : 'custom';

    return (
      <div>
        <RadioSetting
          id="modules-order-select"
          label="Modules order"
          options={options}
          value={radioValue}
          onChange={this.onRadioChange}>
          <Button
            className="position-absolute"
            color="link"
            disabled={isAlphabetic}
            style={{
              bottom: 0,
              right: 0,
              paddingTop: 0,
              paddingBottom: 0,
              height: 26
            }}
            onClick={this.onToggle}>
            Edit
          </Button>
        </RadioSetting>

        <Modal isOpen={isOpen} toggle={this.onToggle}>
          <ModalHeader toggle={this.onToggle}>
            Edit custom modules order
          </ModalHeader>

          <ModalBody>
            <Input
              type="textarea"
              name="custom-order"
              rows={15}
              value={customOrder}
              onChange={this.onCustomOrderChange} />

            <p className="mt-2">Enter each module name in a separate line.</p>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.onToggle}>
              Done
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModulesOrder;

import React, { Component } from 'react';
import Dropdown from 'reactstrap/lib/Dropdown';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import RefactoringDropdownOption from './option';
import { reactFeatures, reduxFeatures } from 'data';

const allFeatures = [
  ...reactFeatures,
  ...reduxFeatures
];

class RefactoringDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      value: reactFeatures[0].id
    };
  }

  toggle = (event) => {
    const { dataset } = event.currentTarget;
    const value = dataset && dataset.value;
    this.setState((previousState) => ({
      isOpen: !previousState.isOpen,
      value: value || previousState.value
    }));
  };

  render() {
    const { value, isOpen } = this.state;

    return (
      <Dropdown direction="right" isOpen={isOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {allFeatures.find(({ id }) => id === value).name}
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem header>React</DropdownItem>
          {reactFeatures.map((feature) => (
            <RefactoringDropdownOption key={feature.id} {...feature} />
          ))}

          <DropdownItem divider />

          <DropdownItem header>Redux</DropdownItem>
          {reduxFeatures.map((feature) => (
            <RefactoringDropdownOption key={feature.id} {...feature} />
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default RefactoringDropdown;

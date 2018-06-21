import React from 'react';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import PropTypes from 'prop-types';

const RefactoringDropdownOption = ({ id, name }) => (
  <DropdownItem data-value={id}>
    {name}
  </DropdownItem>
);

RefactoringDropdownOption.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any
};

export default RefactoringDropdownOption;

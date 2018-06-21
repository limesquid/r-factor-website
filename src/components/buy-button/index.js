import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'reactstrap/lib/Button';

const BuyButton = ({ className, ...props }) => (
  <LinkContainer to="/purchase">
    <Button className={classNames('text-white', className)} color="warning" {...props}>
      Buy Now!
    </Button>
  </LinkContainer>
);

BuyButton.propTypes = {
  className: PropTypes.string
};

export default BuyButton;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'reactstrap/lib/Button';

const TryButton = ({ className, ...props }) => (
  <LinkContainer to="/try">
    <Button className={classNames('text-white', className)} color="primary" {...props}>
      Try
    </Button>
  </LinkContainer>
);

TryButton.propTypes = {
  className: PropTypes.string
};

export default TryButton;

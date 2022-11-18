import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'reactstrap/lib/Button';

const DownloadButton = ({ className, ...props }) => (
  <LinkContainer to="/download">
    <Button className={classNames('text-white', className)} color="warning" {...props}>
      Download
    </Button>
  </LinkContainer>
);

DownloadButton.propTypes = {
  className: PropTypes.string
};

export default DownloadButton;

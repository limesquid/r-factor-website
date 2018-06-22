import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const Spinner = ({ className, ...props }) => (
  <div className={classNames('spinner', className)} {...props} />
);

Spinner.propTypes = {
  className: PropTypes.string
};

export default Spinner;

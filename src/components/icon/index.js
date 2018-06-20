import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const Icon = ({ bsStyle, className, name, ...props }) => (
  <span
    className={classNames(
      'oi',
      `oi-${name}`,
      bsStyle,
      className
    )}
    {...props} />
);

Icon.propTypes = {
  bsStyle: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Icon;

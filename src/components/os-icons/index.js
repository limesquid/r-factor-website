import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Linux from './linux';
import OsX from './osx';
import Windows from './windows';
import './styles.css';

const svgProps = {
  className: 'mx-2',
  height: 36
};

const OsIcons = ({ className, ...props }) => (
  <div className={classNames('os-icons', className)} {...props}>
    <Windows {...svgProps} />
    <Linux {...svgProps} />
    <OsX {...svgProps} />
  </div>
);

OsIcons.propTypes = {
  className: PropTypes.string
};

export default OsIcons;

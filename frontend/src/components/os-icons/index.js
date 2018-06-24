import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LabeledIcon from 'components/labeled-icon';
import Linux from './linux';
import OsX from './osx';
import Windows from './windows';
import './styles.css';

const svgProps = {
  height: 48
};

const OsIcons = ({ className, ...props }) => (
  <div className={classNames('os-icons', 'd-flex', className)} {...props}>
    <LabeledIcon className="mr-3" label="Windows">
      <Windows {...svgProps} />
    </LabeledIcon>
    <LabeledIcon className="mx-3" label="Linux">
      <Linux {...svgProps} />
    </LabeledIcon>
    <LabeledIcon className="ml-3" label="MacOS">
      <OsX {...svgProps} />
    </LabeledIcon>
  </div>
);

OsIcons.propTypes = {
  className: PropTypes.string
};

export default OsIcons;

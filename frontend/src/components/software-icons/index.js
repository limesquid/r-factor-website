import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LabeledIcon from 'components/labeled-icon';
import Node from './node';
import Python from './python';

const svgProps = {
  height: 48
};

const SoftwareIcons = ({ className, ...props }) => (
  <div className={classNames('d-flex', className)} {...props}>
    <LabeledIcon
      className="mr-3"
      label={(
        <span>Node.js <code>>= 4.x.x</code></span>
      )}>
      <Node {...svgProps} />
    </LabeledIcon>
    <LabeledIcon
      className="ml-3"
      label={(
        <span>Python <code>2.7.x</code></span>
      )}>
      <Python {...svgProps} />
    </LabeledIcon>
  </div>
);

SoftwareIcons.propTypes = {
  className: PropTypes.string
};

export default SoftwareIcons;

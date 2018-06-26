import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LabeledIcon = ({ children, className, label, subLabel }) => (
  <div className={classNames('d-flex flex-column align-items-center', className)}>
    <div className="my-1">
      {children}
    </div>

    <div className="text-muted text-nowrap">
      <span>{label} <code>{subLabel}</code></span>
    </div>
  </div>
);

LabeledIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.node.isRequired,
  subLabel: PropTypes.node
};

export default LabeledIcon;

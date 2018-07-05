import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LabeledIcon = ({ children, className, hideLabels, label, subLabel }) => (
  <div className={classNames('d-flex flex-column align-items-center', className)}>
    <div className="my-1">
      {children}
    </div>

    {!hideLabels && (
      <div className="text-muted text-nowrap">
        <span>{label} <code>{subLabel}</code></span>
      </div>
    )}
  </div>
);

LabeledIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hideLabels: PropTypes.bool,
  label: PropTypes.node.isRequired,
  subLabel: PropTypes.node
};

export default LabeledIcon;

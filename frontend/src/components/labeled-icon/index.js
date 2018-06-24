import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LabeledIcon = ({ children, className, label }) => (
  <div className={classNames('d-flex flex-column align-items-center', className)}>
    {children}

    <div className="text-muted text-nowrap">
      {label}
    </div>
  </div>
);

LabeledIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.node.isRequired
};

export default LabeledIcon;

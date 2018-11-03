import React from 'react';
import PropTypes from 'prop-types';

const Introduction = ({ className }) => (
  <div className={className}>
    <p>
      If you have any questions regarding our Privacy Policy remember that you
      can contact us at any time by writing us a message using our contact form.
    </p>
  </div>
);

Introduction.propTypes = {
  className: PropTypes.string
};

export default Introduction;

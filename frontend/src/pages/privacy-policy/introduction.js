import React from 'react';
import PropTypes from 'prop-types';

const Introduction = ({ className }) => (
  <p className="text-muted">
    If you have any questions regarding our Privacy Policy remember that you
    can contact us at any time by writing us a message using our contact form.
  </p>
);

Introduction.propTypes = {
  className: PropTypes.string
};

export default Introduction;

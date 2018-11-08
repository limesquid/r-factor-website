import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/link';

const Introduction = ({ className }) => (
  <p className="text-muted">
    If you have any questions regarding our Privacy Policy remember that you can contact us
    at any time by writing us a message using our <Link href="/support" label="contact form" />.
  </p>
);

Introduction.propTypes = {
  className: PropTypes.string
};

export default Introduction;

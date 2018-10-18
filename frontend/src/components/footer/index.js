import React from 'react';
import PropTypes from 'prop-types';
import Container from 'reactstrap/lib/Container';

const FIRST_YEAR = 2018;
const CURRENT_YEAR = new Date().getFullYear();

const getYears = () => {
  if (FIRST_YEAR === CURRENT_YEAR) {
    return FIRST_YEAR;
  }
  return `${FIRST_YEAR} - ${CURRENT_YEAR}`;
};

const Footer = ({  }) => (
  <Container className="py-5 text-center text-muted">
    © {getYears()} <span className="text-body">{process.env.REACT_APP_AUTHOR}</span>. All rights reserved.
  </Container>
);

export default Footer;

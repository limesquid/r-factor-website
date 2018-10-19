import React from 'react';
import Container from 'reactstrap/lib/Container';

const FIRST_YEAR = 2018;
const CURRENT_YEAR = new Date().getFullYear();

const getYears = () => {
  if (FIRST_YEAR === CURRENT_YEAR) {
    return FIRST_YEAR;
  }
  return `${FIRST_YEAR} - ${CURRENT_YEAR}`;
};

const Footer = () => (
  <Container className="py-5 text-center text-muted">
    © {getYears()} <span className="text-body">Kamil Mielnik</span> & <span className="text-body">Yuriy Yakym</span>.
    All rights reserved.
  </Container>
);

export default Footer;

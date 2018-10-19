import React from 'react';

const FIRST_YEAR = 2018;
const CURRENT_YEAR = new Date().getFullYear();

const getYears = () => {
  if (FIRST_YEAR === CURRENT_YEAR) {
    return FIRST_YEAR;
  }
  return `${FIRST_YEAR} - ${CURRENT_YEAR}`;
};

const Footer = () => (
  <div className="py-5 px-2 mt-5 text-center text-muted" style={{ background: 'black' }}>
    © {getYears()} <span className="text-body">Kamil Mielnik</span> & <span className="text-body">Yuriy Yakym</span>.
    All rights reserved.
  </div>
);

export default Footer;

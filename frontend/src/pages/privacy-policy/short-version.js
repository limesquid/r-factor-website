import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'components/link';

const ShortVersion = ({ className }) => (
  <Fragment>
    <h3>Short version – key information</h3>
    <p className="text-muted">
      We care about your privacy and value your time. That is why we have prepared
      a short version of the most important rules related to privacy protection.
    </p>

    <ul className="text-muted">
      <li>
        We use the <Link label="Yandex.Metrica" href="https://yandex.com/support/metrica/index.html" /> web analytics
        service provided by the company Yandex Oy Limited Company - Moreenikatu 6, 04600 Mantsala, Finland,
      </li>

      <li>
        We use <Link label="PayU" href="https://www.payu.pl/en" /> payment system.
      </li>
    </ul>

    <p className="text-muted">
      If the above information is not enough for you, you will find further details below.
    </p>
  </Fragment>
);

ShortVersion.propTypes = {
  className: PropTypes.string
};

export default ShortVersion;

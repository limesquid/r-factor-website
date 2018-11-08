import React from 'react';
import PropTypes from 'prop-types';

const ShortVersion = ({ className }) => (
  <div className={className}>
    <h3>Short version – key information</h3>
    <p>
      We care about your privacy and value your time. That is why we have prepared
      a short version of the most important rules related to privacy protection.
    </p>

    <ul>
      <li>
        We use the&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://yandex.com/support/metrica/index.html">Yandex.Metrica</a>
        &nbsp;web analytics
        service provided by the company Yandex Oy Limited Company - Moreenikatu 6, 04600 Mantsala, Finland,
      </li>

      <li>
        We use&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.payu.pl/en" />
        &nbsp;payment system.
      </li>
    </ul>

    <p>
      If the above information is not enough for you, you will find further details below.
    </p>
  </div>
);

ShortVersion.propTypes = {
  className: PropTypes.string
};

export default ShortVersion;

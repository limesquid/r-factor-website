import React, { Fragment } from 'react';

const ShortVersion = () => (
  <Fragment>
    <h3>TLDR</h3>
    <p className="text-muted">
      We care about your privacy and value your time. That is why we have prepared
      a short version of the most important rules related to privacy protection.
    </p>

    <ul className="text-muted">
      <li>
        We use the&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://yandex.com/support/metrica/index.html">
          Yandex.Metrica
        </a>
        &nbsp;web analytics
        service provided by the company Yandex Oy Limited Company - Moreenikatu 6, 04600 Mantsala, Finland
      </li>

      <li>
        We use the&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.payu.pl/en">
          PayU
        </a>
        &nbsp;payment system provided by the company PayU S.A. - Grunwaldzka 182, 60-166, Poznań, Poland
      </li>
    </ul>

    <p className="text-muted">
      If the above information is not enough for you, you will find further details below.
    </p>
  </Fragment>
);

export default ShortVersion;

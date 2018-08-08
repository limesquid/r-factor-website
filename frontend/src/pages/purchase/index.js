import React from 'react';
import { Helmet } from 'react-helmet';
import Link from 'components/link';
import Calculator from './calculator';
import PriceDetails from './price-details';
import './styles.css';

const PurchasePage = () => (
  <div className="purchase">
    <Helmet>
      <title>R-Factor - Purchase</title>
    </Helmet>
    <div className="row">
      <div className="col-lg-6">
        <PriceDetails />
        Licenses are per-user, rather than per-machine, so you can enjoy R-Factor on as many computers and operating systems as you wish with your license.
        &nbsp;<Link label="More" href="/eula" />
      </div>
      <Calculator />
    </div>
  </div>
);

export default PurchasePage;

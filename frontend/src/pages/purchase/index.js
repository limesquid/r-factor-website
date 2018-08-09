import React from 'react';
import { Helmet } from 'react-helmet';
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
      </div>
      <Calculator />
    </div>
  </div>
);

export default PurchasePage;

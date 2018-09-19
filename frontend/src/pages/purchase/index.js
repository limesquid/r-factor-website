import React from 'react';
import { Helmet } from 'react-helmet';
import Calculator from './calculator';
import PaymentPanel from './payment-panel';
import './styles.css';

const PurchasePage = () => (
  <div className="purchase">
    <Helmet>
      <title>R-Factor - Purchase</title>
    </Helmet>
    <div className="row">
      <div className="col-lg-6">
        <PaymentPanel />
      </div>
      <div className="col-lg-6">
        <Calculator />
      </div>
    </div>
  </div>
);

export default PurchasePage;

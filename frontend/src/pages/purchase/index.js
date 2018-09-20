import React from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'reactstrap';
import Calculator from './calculator';
import PaymentPanel from './payment-panel';
import './styles.css';

const PurchasePage = () => (
  <div className="purchase">
    <Helmet>
      <title>R-Factor - Purchase</title>
    </Helmet>
    <Row>
      <Col md={6} className="mb-4">
        <PaymentPanel />
      </Col>
      <Col md={6}>
        <Calculator />
      </Col>
    </Row>
  </div>
);

export default PurchasePage;

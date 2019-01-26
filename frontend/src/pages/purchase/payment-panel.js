import React from 'react';
import { Card, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';
import BuyForm from './buy-form';

const LICENSE_FEE = (process.env.REACT_APP_LICENSE_FEE / 100).toFixed(2);

const PaymentPanel = () => (
  <Card className="py-3 border-light">
    <CardHeader className="text-center text-body mx-3 px-0" style={{ fontSize: '3rem' }}>
      {LICENSE_FEE} {process.env.REACT_APP_LICENSE_CURRENCY_CODE} <sub>netto</sub>
    </CardHeader>

    <CardBody>
      <ListGroup flush>
        <ListGroupItem className="pb-4 pt-0 px-0 text-justify text-muted">
          Licenses are per-user, rather than per-machine, so you can enjoy R-Factor
          on as many computers, editors and operating systems as you wish with your license.
        </ListGroupItem>

        <ListGroupItem className="pt-4 pb-0 px-0">
          <BuyForm />
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

export default PaymentPanel;

import React from 'react';
import Link from 'components/link';
import { Card, CardBody, CardHeader } from 'reactstrap';
import BuyForm from './buy-form';

const PaymentPanel = () => (
  <Card className="py-3 border-light">
    <CardHeader className="text-center text-info mx-3" style={{ fontSize: '3rem' }}>
      {process.env.REACT_APP_LICENSE_FEE} $
    </CardHeader>
    <CardBody>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-justify pb-4">
          <p className="text-muted">
            Licenses are per-user, rather than per-machine, so you can enjoy R-Factor
            on as many computers and operating systems as you wish with your license.
          </p>
          <div className="float-right"><Link label="EULA" href="/eula" /></div>
        </li>
        <li className="list-group-item pt-4">
          <BuyForm />
        </li>
      </ul>
    </CardBody>
  </Card>
);

export default PaymentPanel;

import React from 'react';
import Link from 'components/link';
import BuyForm from './buy-form';

const PriceDetails = () => (
  <div className="col-lg-10 card py-2 border-light">
    <div className="card-header price text-center text-info" style={{ fontSize: '4rem' }}>
      {process.env.REACT_APP_LICENSE_FEE}$
    </div>
    <div className="card-body text-muted">
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-justify">
          Licenses are per-user, rather than per-machine, so you can enjoy R-Factor
          on as many computers and operating systems as you wish with your license.
          <div className="float-right mt-2"><Link label="More" href="/eula" /></div>
        </li>
        <li className="list-group-item">
          <BuyForm />
        </li>
      </ul>
    </div>
  </div>
);

export default PriceDetails;

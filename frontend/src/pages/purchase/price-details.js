import React from 'react';
import Link from 'components/link';

const PriceDetails = () => (
  <div className="col-lg-10 card border-light py-2">
    <div className="card-header price text-center text-info" style={{ fontSize: '4rem' }}>
      {process.env.REACT_APP_LICENSE_FEE}$
    </div>
    <div className="card-body text-center">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Licenses are per-user, rather than per-machine, so you can enjoy R-Factor
          on as many computers and operating systems as you wish with your license.
          &nbsp;<Link label="More" href="/eula" />
        </li>
        <li className="list-group-item">Support and updates included with subscription</li>
      </ul>
    </div>
  </div>
);

export default PriceDetails;

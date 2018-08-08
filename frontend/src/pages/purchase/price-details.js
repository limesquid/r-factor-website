import React from 'react';

const PriceDetails = () => (
  <div className="price-details py-2">
    <div className="price">
      {process.env.REACT_APP_LICENSE_FEE}$
    </div>
  </div>
);

export default PriceDetails;

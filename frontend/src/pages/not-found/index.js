import React from 'react';
import { Helmet } from 'react-helmet';
import Link from 'components/link';

const PurchasePage = () => (
  <div>
    <Helmet>
      <title>R-Factor - 404 - Not found</title>
    </Helmet>

    <h1><span className="text-danger">404</span> - Not found</h1>
    <h4 className="mb-4">We don't know what you're looking for, but it's not here.</h4>
    <p>
      If you think this is an issue and <code>{window.location.pathname}</code> is a valid URL,
      please report it <Link href="/support" label="here" />.
    </p>
  </div>
);

export default PurchasePage;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ThankYou from './thank-you';
import SupportForm from './support-form';

const SupportPage = () => (
  <div>
    <Helmet>
      <title>R-Factor - Support</title>
    </Helmet>

    <Switch>
      <Route path="/support/thank-you" component={ThankYou} />
      <Route path="/support" component={SupportForm} />
    </Switch>
  </div>
);

export default SupportPage;

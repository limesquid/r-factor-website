import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Helmet } from 'react-helmet';
import Button from 'reactstrap/lib/Button';
import ThankYou from './thank-you';
import TypeChoice from './type-choice';
import routes from './routes';

/*
  - bug
    - input
    - settings
    - r-factor version (+ link how to check)
    - expected output
  - idea
  - other

  - do kazdego: email (+ captcha?)
*/
const SupportPage = () => (
  <div>
    <Helmet>
      <title>R-Factor - Support</title>
    </Helmet>

    <Switch>
      {routes.map(({ to, Component }) => (
        <Route key={to} exact path={to} component={Component} />
      ))}
      <Route path="/support/thank-you" component={ThankYou} />
      <Route path="/support" component={TypeChoice} />
    </Switch>
  </div>
);

export default SupportPage;

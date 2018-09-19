import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';
import CookieConsent from 'components/cookie-consent';
import Navigation from 'components/navigation';
import ScrollToTop from 'components/scroll-to-top';
import DocumentationPage from 'pages/documentation';
import HomePage from 'pages/home';
import LicensePage from 'pages/license';
import NotFound from 'pages/not-found';
import PurchasePage from 'pages/purchase';
import SupportPage from 'pages/support';
import TryPage from 'pages/try';
import CompletePaymentPage from 'pages/complete-payment';
import 'styles/styles.css';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <div>
        <CookieConsent />
        <Navigation />

        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/documentation" component={DocumentationPage} />
            <Route path="/eula" component={LicensePage} />
            <Route path="/purchase" component={PurchasePage} />
            <Route path="/support" component={SupportPage} />
            <Route path="/try" component={TryPage} />
            <Route path="/complete-payment/:internalOrderId" component={CompletePaymentPage} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;

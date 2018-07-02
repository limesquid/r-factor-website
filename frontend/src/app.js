import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';
import Navigation from 'components/navigation';
import ScrollToTop from 'components/scroll-to-top';
import DocumentationPage from 'pages/documentation';
import HomePage from 'pages/home';
import LicensePage from 'pages/license';
import PurchasePage from 'pages/purchase';
import SupportPage from 'pages/support';
import TryPage from 'pages/try';
import 'styles/styles.css';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <div>
        <Navigation />

        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/documentation" component={DocumentationPage} />
            <Route path="/eula" component={LicensePage} />
            <Route path="/purchase" component={PurchasePage} />
            <Route path="/support" component={SupportPage} />
            <Route path="/try" component={TryPage} />
          </Switch>
        </Container>
      </div>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;

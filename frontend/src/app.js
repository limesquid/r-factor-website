import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';
import Navigation from 'components/navigation';
import Footer from 'components/footer';
import ScrollToTop from 'components/scroll-to-top';
import DocumentationPage from 'pages/documentation';
import DownloadPage from 'pages/download';
import HomePage from 'pages/home';
import LicensePage from 'pages/license';
import NotFound from 'pages/not-found';
import PrivacyPolicy from 'pages/privacy-policy';
import PurchasePage from 'pages/purchase';
import SupportPage from 'pages/support';
import TryPage from 'pages/try';
import CompletePaymentPage from 'pages/complete-payment';
import 'styles/styles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Navigation />

          <Container id="content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/download" component={DownloadPage} />
              <Route path="/documentation" component={DocumentationPage} />
              <Route path="/eula" component={LicensePage} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/purchase" component={PurchasePage} />
              <Route path="/support" component={SupportPage} />
              <Route path="/try" component={TryPage} />
              <Route path="/complete-payment/:internalOrderId" component={CompletePaymentPage} />
              <Route component={NotFound} />
            </Switch>
          </Container>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;

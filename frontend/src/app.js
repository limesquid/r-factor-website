import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from 'reactstrap/lib/Container';
import Navigation from 'components/navigation';
import Footer from 'components/footer';
import ScrollToTop from 'components/scroll-to-top';
import DocumentationPage from 'pages/documentation';
import DownloadPage from 'pages/download';
import HomePage from 'pages/home';
import NotFound from 'pages/not-found';
import SupportPage from 'pages/support';
import TryPage from 'pages/try';

import 'styles/styles.css';

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Navigation />

      <Container id="content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/download" component={DownloadPage} />
          <Route path="/documentation" component={DocumentationPage} />
          <Route path="/support" component={SupportPage} />
          <Route path="/try" component={TryPage} />
          <Route component={NotFound} />
        </Switch>
      </Container>

      <Footer />
    </ScrollToTop>
  </BrowserRouter>
);

export default App;

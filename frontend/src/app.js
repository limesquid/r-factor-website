import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Navigation from 'components/navigation';
import DocumentationPage from 'pages/documentation';
import HomePage from 'pages/home';
import LicensePage from 'pages/license';
import PurchasePage from 'pages/purchase';
import SupportPage from 'pages/support';
import TryPage from 'pages/try';
import 'styles/styles.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />

      <Container>
        <Row>
          <Col>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/documentation" component={DocumentationPage} />
              <Route path="/license" component={LicensePage} />
              <Route path="/purchase" component={PurchasePage} />
              <Route path="/support" component={SupportPage} />
              <Route path="/try" component={TryPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  </BrowserRouter>
);

export default App;

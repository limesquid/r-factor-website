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
import 'styles/styles.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />

      <Container>
        <Row>
          <Col md={12}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/documentation" component={DocumentationPage} />
              <Route exact path="/license" component={LicensePage} />
              <Route exact path="/purchase" component={PurchasePage} />
              <Route exact path="/support" component={SupportPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  </BrowserRouter>
);

export default App;

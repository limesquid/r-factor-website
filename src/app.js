import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Navigation from 'components/navigation';
import FeaturesPage from 'pages/features';
import HomePage from 'pages/home';
import LicensePage from 'pages/license';
import PurchasePage from 'pages/purchase';
import SuggestionPage from 'pages/suggestion';
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
              <Route exact path="/features" component={FeaturesPage} />
              <Route exact path="/license" component={LicensePage} />
              <Route exact path="/purchase" component={PurchasePage} />
              <Route exact path="/suggestion" component={SuggestionPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  </BrowserRouter>
);

export default App;

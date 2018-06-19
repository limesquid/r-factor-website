import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Col from 'react-bootstrap/es/Col';
import Grid from 'react-bootstrap/es/Grid';
import Row from 'react-bootstrap/es/Row';
import Navigation from './components/navigation';
import FeaturesPage from './pages/features';
import HomePage from './pages/home';
import IssuePage from './pages/issue';
import LicensePage from './pages/license';
import PurchasePage from './pages/purchase';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />

      <Grid>
        <Row>
          <Col md={12}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/features" component={FeaturesPage} />
            <Route exact path="/issue" component={IssuePage} />
            <Route exact path="/license" component={LicensePage} />
            <Route exact path="/purchase" component={PurchasePage} />
          </Col>
        </Row>
      </Grid>
    </div>
  </BrowserRouter>
);

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Navigation from './components/navigation';
import FeaturesPage from './pages/features';
import HomePage from './pages/home';
import IssuePage from './pages/issue';
import LicensePage from './pages/license';
import PurchasePage from './pages/purchase';
import './styles.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />

      <Container>
        <Row>
          <Col md={12}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/features" component={FeaturesPage} />
            <Route exact path="/issue" component={IssuePage} />
            <Route exact path="/license" component={LicensePage} />
            <Route exact path="/purchase" component={PurchasePage} />
          </Col>
        </Row>
      </Container>
    </div>
  </BrowserRouter>
);

export default App;

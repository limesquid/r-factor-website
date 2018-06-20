import React from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import Row from 'reactstrap/lib/Row';
import Feature from './feature';
import { reactFeatures, reduxFeatures } from './data';

const HomePage = () => (
  <div>
    <Jumbotron>
      <h1>R-Factor</h1>
      <p>R-Factor - React & Redux Refactoring Tools for Sublime Text 3</p>
    </Jumbotron>

    <Container>
      <Row>
        <Col md={6}>
          <h2>React refactorings</h2>
          {reactFeatures.map((feature) => (<Feature key={feature.id} {...feature} />))}
        </Col>

        <Col md={6}>
          <h2>Redux refactorings</h2>
          {reduxFeatures.map((feature) => (<Feature key={feature.id} {...feature} />))}
        </Col>
      </Row>
    </Container>

  </div>
);

export default HomePage;

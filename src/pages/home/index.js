import React from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import Row from 'reactstrap/lib/Row';
import Features from './features';
import { configurationFeatures, reactFeatures, reduxFeatures } from 'data';

const firstHalfConfigurationFeatures = configurationFeatures.filter((_, index) => index % 2 === 0);
const secondHalfConfigurationFeatures = configurationFeatures.filter((_, index) => index % 2 !== 0);

const HomePage = () => (
  <div>
    <Jumbotron>
      <h1>R-Factor</h1>
      <p>R-Factor - React & Redux Refactoring Tools for Sublime Text 3</p>
    </Jumbotron>

    <Container>
      <Row>
        <Col lg={6}>
          <h2>React refactorings</h2>
          <Features features={reactFeatures} />
        </Col>

        <Col lg={6}>
          <h2>Redux refactorings</h2>
          <Features features={reduxFeatures} />
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Configuration</h2>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Features features={firstHalfConfigurationFeatures} />
        </Col>
        <Col lg={6}>
          <Features features={secondHalfConfigurationFeatures} />
        </Col>
      </Row>
    </Container>

  </div>
);

export default HomePage;

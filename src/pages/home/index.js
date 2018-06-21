import React from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import Row from 'reactstrap/lib/Row';
import BuyButton from 'components/buy-button';
import Features from './features';
import {
  configurationFeatures,
  reactFeatures,
  reduxFeatures,
  transparentLogoUrl,
  videoUrl
} from 'data';

const firstHalfConfigurationFeatures = configurationFeatures.filter((_, index) => index % 2 === 0);
const secondHalfConfigurationFeatures = configurationFeatures.filter((_, index) => index % 2 !== 0);

const HomePage = () => (
  <div>
    <Jumbotron className="d-flex align-items-center p-4">
      <img
        alt="R-Factor"
        src={transparentLogoUrl}
        width="100" />
      <div className="pl-3">
        <h1>R-Factor</h1>
        <h4>React & Redux Refactoring Tools for Sublime Text 3</h4>
      </div>
    </Jumbotron>

    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        allowFullScreen
        className="embed-responsive-item"
        frameBorder="0"
        src={videoUrl}
        title="R-Factor demo" />
    </div>

    <Container>
      <Row>
        <Col className="d-flex justify-content-center m-4">
          <BuyButton size="lg" />
        </Col>
      </Row>

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

      <Row>
        <Col className="d-flex justify-content-center m-4">
          <BuyButton size="lg" />
        </Col>
      </Row>
    </Container>

  </div>
);

export default HomePage;

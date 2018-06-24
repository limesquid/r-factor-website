import React from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import Row from 'reactstrap/lib/Row';
import BuyButton from 'components/buy-button';
import Features from 'components/features';
import OsIcons from 'components/os-icons';
import SoftwareIcons from 'components/software-icons';
import TryButton from 'components/try-button';
import {
  configurationFeatures,
  reactFeatures,
  reduxFeatures,
  transparentLogoUrl,
  videoUrl
} from 'data';

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
        <Col className="d-flex justify-content-center my-5">
          <TryButton className="mx-3 px-5" size="lg" />
          <BuyButton className="mx-3 px-5" size="lg" />
        </Col>
      </Row>

      <Row className="my-4">
        <Col lg={6}>
          <h2 className="text-nowrap">React refactorings</h2>
          <Features features={reactFeatures} />
        </Col>

        <Col lg={6}>
          <h2 className="text-nowrap">Redux refactorings</h2>
          <Features features={reduxFeatures} />
        </Col>
      </Row>

      <Row className="my-4">
        <Col lg={6}>
          <h2 className="text-nowrap">Configuration</h2>
          <Features features={configurationFeatures} />
        </Col>

        <Col lg={6}>
          <Container>
            <Row className="mb-4">
              <Col className="mb-4" md={6} lg={12}>
                <h2 className="text-nowrap">Supported systems</h2>
                <OsIcons className="py-2" />
              </Col>
              <Col className="mb-4" md={6} lg={12}>
                <h2 className="text-nowrap">Requirements</h2>
                <div className="d-flex">
                  <SoftwareIcons className="py-2" />
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center my-5">
          <TryButton className="mx-3 px-5" size="lg" />
          <BuyButton className="mx-3 px-5" size="lg" />
        </Col>
      </Row>
    </Container>

  </div>
);

export default HomePage;

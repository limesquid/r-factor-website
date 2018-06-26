import React from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import BuyButton from 'components/buy-button';
import Features from 'components/features';
import Icons from 'components/icons';
import TryButton from 'components/try-button';
import {
  configurationFeatures,
  otherFeatures,
  reactFeatures,
  reduxFeatures,
  transparentLogoUrl,
  videoUrl
} from 'data';

const systemsIcons = [
  { id: 'windows', label: 'Windows' },
  { id: 'linux', label: 'Linux' },
  { id: 'macos', label: 'macOS' }
];

const requirementsIcons = [
  { id: 'node', label: 'Node.js', subLabel: '>= 6.x.x' },
  { id: 'python', label: 'Python', subLabel: '2.7.x' }
];

const editorsIcons = [
  { id: 'sublime', label: 'Sublime Text 3' }
];

const HomePage = () => (
  <div>
    <div className="d-flex align-items-center mb-5">
      <img
        alt="R-Factor"
        className="mr-3"
        src={transparentLogoUrl}
        width="100" />

      <div>
        <h1>R-Factor</h1>
        <h4 className="mb-0">React & Redux Refactoring Tools for Sublime Text 3</h4>
      </div>
    </div>

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
          <h3 className="text-nowrap">React refactorings</h3>
          <Features features={reactFeatures} />
        </Col>

        <Col lg={6}>
          <h3 className="text-nowrap">Redux refactorings</h3>
          <Features features={reduxFeatures} />
        </Col>
      </Row>

      <Row className="my-4">
        <Col className="mb-4" lg={6}>
          <h3 className="text-nowrap">Other refactorings</h3>
          <Features features={otherFeatures} />

          <h3 className="text-nowrap mt-4">Supported systems</h3>
          <Icons icons={systemsIcons} />

          <h3 className="text-nowrap mt-4">Supported editors</h3>
          <Icons icons={editorsIcons} />

          <h3 className="text-nowrap mt-4">Requirements</h3>
          <Icons icons={requirementsIcons} />
        </Col>

        <Col lg={6}>
          <h3 className="text-nowrap">Configuration</h3>
          <Features features={configurationFeatures} />
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

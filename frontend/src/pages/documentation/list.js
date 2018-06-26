import React from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import {
  configurationFeatures,
  otherFeatures,
  reactFeatures,
  reduxFeatures
} from 'data';
import Links from './links';

const List = () => (
  <Container>
    <Row>
      <Col md={6}>
        <h3>React refactorings</h3>
        <Links className="mb-4" features={reactFeatures} />
      </Col>

      <Col md={6}>
        <h3>Redux refactorings</h3>
        <Links className="mb-4" features={reduxFeatures} />
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <h3>Other refactorings</h3>
        <Links className="mb-4" features={otherFeatures} />
      </Col>

      <Col md={6}>
        <h3>Configuration</h3>
        <Links className="mb-4" features={configurationFeatures} />
      </Col>
    </Row>
  </Container>
);

export default List;

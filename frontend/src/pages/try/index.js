import React from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Code from 'components/code';
import defaultCode from './default-code';

const TryPage = () => (
  <Container>
    <Row>
      <Col md={6}>
        <h3>Input</h3>
        <Code value={defaultCode} />
      </Col>

      <Col md={6}>
        <h3>Output</h3>
        <Code value={defaultCode} />
      </Col>
    </Row>
  </Container>
);

export default TryPage;

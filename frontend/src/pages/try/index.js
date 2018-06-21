import React from 'react';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Code from 'components/code';
import RefactoringDropdown from 'components/refactoring-dropdown';
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
        <Code disabled value={defaultCode} />
      </Col>
    </Row>

    <Row>
      <Col md={10}>
        <RefactoringDropdown />
      </Col>

      <Col md={2} className="d-flex justify-content-end">
        <Button color="primary" size="lg">
          Refactor
        </Button>
      </Col>
    </Row>
  </Container>
);

export default TryPage;

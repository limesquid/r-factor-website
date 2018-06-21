import React, { Component } from 'react';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Form from 'reactstrap/lib/Form';
import Row from 'reactstrap/lib/Row';
import Code from 'components/code';
import RefactoringsSelect from 'components/refactorings-select';
import defaultCode from './default-code';
import { reactFeatures } from 'data';
import { postRefactor } from './api';

class TryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: defaultCode,
      refactoring: reactFeatures[0].id,
      refactoredCode: '/* Click "Refactor" to see something */'
    };
  }

  onCodeChange = (code) => this.setState({ code });

  onRefactoringChange = (refactoring) => this.setState({ refactoring });

  onRefactor = async() => {
    try {
      const refactoredCode = await postRefactor(this.state);
      this.setState({ refactoredCode });
    } catch (error) {
      this.setState({ refactoredCode: `/* ${error} */` });
    }
  };

  render() {
    const { code, refactoring, refactoredCode } = this.state;

    return (
      <Container>
        <Row>
          <Col md={6}>
            <h3>Input</h3>
            <Code value={code} onChange={this.onCodeChange} />
          </Col>

          <Col md={6}>
            <h3>Output</h3>
            <Code disabled value={refactoredCode} />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form>
              <RefactoringsSelect value={refactoring} onChange={this.onRefactoringChange} />
            </Form>
          </Col>

          <Col md={2} className="d-flex justify-content-end">
            <Button color="primary" size="lg" onClick={this.onRefactor}>
              Refactor
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TryPage;

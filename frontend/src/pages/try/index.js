import React, { Component } from 'react';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Form from 'reactstrap/lib/Form';
import Row from 'reactstrap/lib/Row';
import Code from 'components/code';
import RefactoringsSelect from 'components/refactorings-select';
import Settings from 'components/settings';
import defaultCode from './default-code';
import { reactFeatures } from 'data';
import { postRefactor } from './api';

class TryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: defaultCode,
      isRefactoring: false,
      refactoring: reactFeatures[0].id,
      refactoredCode: '/* Click "Refactor" to see something */',
      settings: {
        'component-superclass': 'Component',
        'end-of-line': '\n',
        indent: 2,
        quotes: 'single',
        semicolons: true
      }
    };
  }

  onCodeChange = (code) => this.setState({ code });

  onRefactoringChange = (refactoring) => this.setState({ refactoring });

  onRefactor = async() => {
    this.setState({ isRefactoring: true });
    try {
      const response = await postRefactor(this.state);
      const refactoredCode = await response.text();
      this.setState({ isRefactoring: false, refactoredCode });
    } catch (error) {
      this.setState({ isRefactoring: false, refactoredCode: `/* ${error} */` });
    }
  };

  onSettingsChange = (settings) => this.setState({ settings });

  render() {
    const { code, isRefactoring, refactoring, refactoredCode, settings } = this.state;

    return (
      <Container>
        <Row>
          <Col md={6}>
            <h3>Input</h3>
            <Code value={code} onChange={this.onCodeChange} />
          </Col>

          <Col md={6}>
            <h3>Output</h3>
            <Code disabled isLoading={isRefactoring} value={refactoredCode} />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <RefactoringsSelect value={refactoring} onChange={this.onRefactoringChange} />
            <Form>
              <Settings settings={settings} onChange={this.onSettingsChange} />
            </Form>
          </Col>

          <Col md={2} className="d-flex justify-content-end">
            <Button color="primary" disabled={isRefactoring} size="lg" onClick={this.onRefactor}>
              Refactor
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TryPage;

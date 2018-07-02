import React, { createRef, Component } from 'react';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Form from 'reactstrap/lib/Form';
import Row from 'reactstrap/lib/Row';
import { Helmet } from 'react-helmet';
import Code, { sanitize } from 'components/code';
import Recaptcha, { RECAPTCHA_HEIGHT } from 'components/recaptcha';
import RefactoringsSelect from 'components/refactorings-select';
import Settings from 'components/settings';
import defaultCode from './default-code';
import { reactFeatures, configurationFeatures } from 'data';
import { formatError } from 'utils';
import { postRefactor } from './api';

const defaultSettings = configurationFeatures.reduce(
  (settings, feature) => ({
    ...settings,
    [feature.id]: feature.setting.defaultValue
  }),
  {}
);

class TryPage extends Component {
  constructor(props) {
    super(props);
    this.recaptchaRef = createRef();
    this.state = {
      code: defaultCode,
      'g-recaptcha-response': null,
      isRefactoring: false,
      refactoring: reactFeatures[0].id,
      refactoredCode: '// Click "Refactor" to see something',
      settings: defaultSettings
    };
  }

  onClearCode = () => this.setState({ code: '' });

  onCodeChange = (code) => this.setState({ code });

  onCopyToInput = () => this.setState((prevState) => ({
    code: prevState.refactoredCode
  }));

  onRefactoringChange = (refactoring) => this.setState({ refactoring });

  onRefactor = async() => {
    this.setState({ isRefactoring: true });
    try {
      const { code: oldCode, refactoring, settings, 'g-recaptcha-response': recaptcha } = this.state;
      const code = sanitize(oldCode, settings['end-of-line']);
      const response = await postRefactor({ code, refactoring, settings, 'g-recaptcha-response': recaptcha });
      const refactoredCode = await response.text();
      this.setState({ isRefactoring: false, refactoredCode });
    } catch (error) {
      this.setState({ isRefactoring: false, refactoredCode: formatError(error) });
    }
    this.recaptchaRef.current && this.recaptchaRef.current.reset();
  };

  onResetCode = () => this.setState({ code: defaultCode });

  onResetSettings = () => this.setState({ settings: defaultSettings });

  onSettingsChange = (settings) => this.setState({ settings });

  onVerify = (recaptcha) => this.setState({ 'g-recaptcha-response': recaptcha });

  render() {
    const { code, isRefactoring, refactoring, refactoredCode, settings } = this.state;
    const lineSeparator = settings['end-of-line'];
    const indent = settings.indent === 'tab' ? '\t' : settings.indent;
    const tabSize = settings.indent === 'tab' ? 4 : settings.indent;
    const generatedSettings = JSON.stringify(settings, null, indent);

    return (
      <Container>
        <Helmet>
          <title>R-Factor - Try it</title>
        </Helmet>

        <Row>
          <Col md={6}>
            <div style={{ minHeight: RECAPTCHA_HEIGHT }}>
              <h3>Refactoring</h3>
              <RefactoringsSelect
                disabled={isRefactoring}
                value={refactoring}
                onChange={this.onRefactoringChange}
                onSubmit={this.onRefactor} />
            </div>
          </Col>

          <Col md={6}>
            <Recaptcha
              className="mb-4"
              recaptchaRef={this.recaptchaRef}
              onVerify={this.onVerify} />
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <h3 className="d-flex justify-content-between">
              <span>Input</span>

              <div className="d-flex">
                <Button color="link" onClick={this.onClearCode}>
                  Clear
                </Button>
                <Button color="link" onClick={this.onResetCode}>
                  Reset
                </Button>
              </div>
            </h3>
            <Code
              className="mb-4"
              options={{ lineSeparator, tabSize }}
              value={code}
              onChange={this.onCodeChange} />
          </Col>

          <Col lg={6}>
            <h3 className="d-flex justify-content-between">
              <span>Output</span>
              <Button color="link" onClick={this.onCopyToInput}>
                Copy to input
              </Button>
            </h3>
            <Code
              className="mb-4"
              disabled
              isLoading={isRefactoring}
              options={{ lineSeparator, tabSize }}
              value={refactoredCode} />
          </Col>
        </Row>

        <Row style={{ minHeight: 600 }}>
          <Col lg={6}>
            <Form>
              <h3 className="d-flex justify-content-between">
                <span>Settings</span>
                <Button color="link" onClick={this.onResetSettings}>
                  Reset
                </Button>
              </h3>
              <Settings settings={settings} onChange={this.onSettingsChange} />
            </Form>
          </Col>

          <Col lg={6}>
            <h3 className="d-flex justify-content-between">
              <span>Generated settings file</span>
              <Button color="link" data-clipboard-text={generatedSettings}>
                Copy to clipboard
              </Button>
            </h3>
            <Code
              className="mb-4"
              disabled
              autoHeight
              options={{ lineSeparator, tabSize }}
              value={generatedSettings} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TryPage;

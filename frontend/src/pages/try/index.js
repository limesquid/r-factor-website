import React, { Component } from 'react';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Form from 'reactstrap/lib/Form';
import Row from 'reactstrap/lib/Row';
import { Helmet } from 'react-helmet';
import Code, { sanitize } from 'components/code';
import RadioSetting from 'components/radio-setting';
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

const editorOptions = [
  { label: 'Atom', value: 'atom' },
  { label: 'Sublime', value: 'sublime' },
  { label: 'VSCode', value: 'vscode' }
];

class TryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: defaultCode,
      editor: 'atom',
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

  onEditorChange = (editor) => this.setState({ editor });

  onRefactoringChange = (refactoring) => this.setState({ refactoring });

  onRefactor = async () => {
    this.setState({ isRefactoring: true });
    try {
      const { code: oldCode, refactoring, settings } = this.state;
      const code = sanitize(oldCode, settings['end-of-line']);
      const response = await postRefactor({ code, refactoring, settings });
      const refactoredCode = await response.text();
      this.setState({ isRefactoring: false, refactoredCode });
    } catch (error) {
      this.setState({ isRefactoring: false, refactoredCode: formatError(error) });
    }
  };

  onResetCode = () => this.setState({ code: defaultCode });

  onResetSettings = () => this.setState({ settings: defaultSettings });

  onSettingsChange = (settings) => this.setState({ settings });

  generateSettings = () => {
    const { editor, settings } = this.state;
    const indent = settings.indent === 'tab' ? '\t' : settings.indent;
    const sortedSettings = {};
    Object.keys(settings)
      .filter((setting) => {
        if ([ 'atom', 'vscode' ].includes(editor) && setting === 'NODE_BIN') {
          return false;
        }
        return true;
      })
      .sort()
      .forEach((key) => {
        const prefixedKey = editor === 'vscode' ? `r-factor.${key}` : key;
        sortedSettings[prefixedKey] = settings[key];
      });
    return JSON.stringify(sortedSettings, null, indent);
  };

  render() {
    const { code, editor, isRefactoring, refactoring, refactoredCode, settings } = this.state;
    const lineSeparator = settings['end-of-line'];
    const tabSize = settings.indent === 'tab' ? 4 : settings.indent;
    const generatedSettings = this.generateSettings();

    return (
      <div>
        <Helmet>
          <title>R-Factor - Try it</title>
        </Helmet>

        <Row>
          <Col md={6}>
            <h3>Refactoring</h3>
            <RefactoringsSelect
              disabled={isRefactoring}
              value={refactoring}
              onChange={this.onRefactoringChange}
              onSubmit={this.onRefactor} />
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
          <Col lg={12}>
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
            <RadioSetting
              id="editor"
              label="Editor"
              horizontal
              options={editorOptions}
              value={editor}
              onChange={this.onEditorChange} />
            <Code
              className="mb-4"
              disabled
              autoHeight
              options={{ lineSeparator, tabSize }}
              value={generatedSettings} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default TryPage;

import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import CustomInput from 'reactstrap/lib/CustomInput';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import Row from 'reactstrap/lib/Row';
import isEmail from 'validator/lib/isEmail';
import Code from 'components/code';
import RadioSetting from 'components/radio-setting';
import { formatError } from 'utils';
import { postSupport } from './api';

const MIN_INPUT_LENGTH = 10;
const typesOptions = [
  { color: 'primary', label: 'Contact us', value: 'contact' },
  { color: 'danger', label: 'Report an issue', value: 'issue' },
  { color: 'success', label: 'Submit an idea', value: 'idea' }
];

class SupportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attachCode: false,
      attachConfiguration: false,
      configuration: '',
      email: '',
      error: null,
      input: '',
      isSending: false,
      message: '',
      output: '',
      redirect: null,
      type: null
    };
  }

  onAttachCodeChange = (event) => this.setState({ attachCode: event.target.checked });
  onAttachConfigurationChange = (event) => this.setState({ attachConfiguration: event.target.checked });
  onConfigurationChange = (configuration) => this.setState({ configuration });
  onEmailChange = (event) => this.setState({ email: event.target.value });
  onInputChange = (input) => this.setState({ input });
  onMessageChange = (event) => this.setState({ message: event.target.value });
  onOutputChange = (output) => this.setState({ output });
  onTypeChange = (type) => this.setState({ type });

  onSubmit = async() => {
    const validationError = this.validate();
    if (validationError) {
      this.setState({ error: validationError });
    } else {
      this.setState({ isSending: true, error: null });
      try {
        const { attachCode, email, message, input, output, type } = this.state;
        const data = { attachCode, email, message, input, output, type };
        await postSupport(data);
        this.setState({ isSending: false, redirect: '/support/thank-you' });
      } catch (error) {
        this.setState({ isSending: false, error: formatError(error) });
      }
    }
  };

  validate = () => {
    const { attachCode, attachConfiguration, configuration, email, message, input, output, type } = this.state;

    if (!type) {
      return 'Please indicate whether you\'re reporting an issue, submitting an idea or wanting to contact us.';
    }
    if (message.length < MIN_INPUT_LENGTH) {
      return 'Message is too short.';
    }
    if (email && !isEmail(email)) {
      return 'Email is invalid.';
    }
    if (attachConfiguration) {
      try {
        JSON.parse(configuration);
      } catch (error) {
        return 'Configuration is not a valid JSON.';
      }
    }
    if (attachCode) {
      if (input.length < MIN_INPUT_LENGTH) {
        return 'Input code too short.';
      }
      if (output.length < MIN_INPUT_LENGTH) {
        return 'Expected output code too short.';
      }
    }
    return null;
  };

  render() {
    const {
      attachCode,
      attachConfiguration,
      configuration,
      email,
      error,
      input,
      isSending,
      message,
      output,
      redirect,
      type
    } = this.state;
    const allowCode = [ 'idea', 'issue' ].includes(type);

    if (redirect) {
      return (
        <Redirect to={redirect} />
      );
    }

    return (
      <div>
        <h1>Support</h1>

        <Form>
          <Row>
            <Col lg={6} className="mb-4">
              <RadioSetting
                id="type-select"
                label="What would you like to do?"
                options={typesOptions}
                value={type}
                onChange={this.onTypeChange} />

              <div
                className={classNames(
                  'd-flex',
                  'mb-2',
                  {
                    invisible: !allowCode
                  }
                )}>
                <CustomInput
                  type="checkbox"
                  className="mr-4 text-muted"
                  checked={attachConfiguration}
                  id="attach-configuration"
                  label="Attach configuration"
                  name="attach-configuration"
                  onChange={this.onAttachConfigurationChange} />

                <CustomInput
                  type="checkbox"
                  className="text-muted"
                  checked={attachCode}
                  id="attach-code"
                  label="Attach code"
                  name="attach-code"
                  onChange={this.onAttachCodeChange} />
              </div>

              <FormGroup className="my-4">
                <Label for="message-input">Message</Label>
                <Input
                  type="textarea"
                  className="mr-2"
                  id="message-input"
                  name="message-input"
                  rows={5}
                  value={message}
                  onChange={this.onMessageChange} />
                <p className="my-1 text-muted">
                  Tell us what's on your mind.
                </p>
              </FormGroup>

              <FormGroup className="mb-4">
                <Label for="email-input">Email</Label>
                <Input
                  type="email"
                  className="mr-2"
                  id="email-input"
                  name="email-input"
                  value={email}
                  onChange={this.onEmailChange} />
                <p className="my-1 text-muted">
                  Optional. You don't have to provide one if you don't want us to contact you.
                </p>
              </FormGroup>

              <Button color="primary" disabled={isSending} onClick={this.onSubmit}>
                Submit
              </Button>

              {error && (
                <p className="text-danger my-2">
                  {error}
                </p>
              )}
            </Col>

            {allowCode && (
              <Col lg={6}>
                {attachConfiguration && (
                  <Fragment>
                    <Label>Configuration file</Label>
                    <Code value={configuration} onChange={this.onConfigurationChange} />
                    <p className="mt-1 mb-4 text-muted">
                      Paste contents of your configuration file here.
                    </p>
                  </Fragment>
                )}

                {attachCode && (
                  <Fragment>
                    <Label>Input code</Label>
                    <Code value={input} onChange={this.onInputChange} />
                    <p className="mt-1 mb-4 text-muted">
                      Please make sure that your code is valid JavaScript.
                      You can do that with <a href="https://astexplorer.net/">astexplorer.net</a>
                      {' '}
                      with <code>babylon7</code> parser.
                    </p>

                    <Label>Expected output</Label>
                    <Code value={output} onChange={this.onOutputChange} />
                    <p className="mt-1 mb-4 text-muted">
                      Code says more than a 1000 words.
                    </p>
                  </Fragment>
                )}
              </Col>
            )}
          </Row>
        </Form>
      </div>
    );
  }
}

export default SupportForm;

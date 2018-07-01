import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import Row from 'reactstrap/lib/Row';
import isEmail from 'validator/lib/isEmail';
import { formatError } from 'utils';
import { postSupport } from './api';

const MIN_MESSAGE_LENGTH = 10;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: null,
      isSending: false,
      message: '',
      redirect: null
    };
  }

  onEmailChange = (event) => this.setState({
    email: event.target.value
  });

  onMessageChange = (event) => this.setState({
    message: event.target.value
  });

  onSubmit = async() => {
    const error = this.validate();
    if (error) {
      this.setState({ error })
    } else {
      this.setState({ isSending: true, error: null });
      try {
        const { email, message } = this.state;
        await postSupport({ email, message });
        this.setState({ isSending: false, redirect: '/support/thank-you' });
      } catch (error) {
        this.setState({ isSending: false, error: formatError(error) });
      }
    }
  };

  validate = () => {
    const { email, message } = this.state;
    if (message.length < MIN_MESSAGE_LENGTH) {
      return 'Message is too short.';
    }
    if (email && !isEmail(email)) {
      return 'Email is invalid.';
    }
    return null;
  }

  render() {
    const { email, error, isSending, message, redirect } = this.state;

    if (redirect) {
      return (
        <Redirect to={redirect} />
      );
    }

    return (
      <div>
        <h3>Contact us</h3>

        <Row>
          <Col md={9} lg={6}>
            <Form>
              <FormGroup className="mb-4">
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
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;

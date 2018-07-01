import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from 'reactstrap/lib/Button';
import Col from 'reactstrap/lib/Col';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import Row from 'reactstrap/lib/Row';
import { formatError } from 'utils';
import { postSupport } from './api';

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
    this.setState({ isSending: true, error: null });
    try {
      const { email, message } = this.state;
      await postSupport({ email, message });
      this.setState({ isSending: false, redirect: '/support/thank-you' });
    } catch (error) {
      this.setState({ isSending: false, error: formatError(error) });
    }
  };

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
                <Label for="email-input">Email</Label>
                <Input
                  type="email"
                  className="mr-2"
                  id="email-input"
                  name="email-input"
                  value={email}
                  onChange={this.onEmailChange} />
              </FormGroup>

              <FormGroup className="mb-4">
                <Label for="message-input">Message</Label>
                <Input
                  type="textarea"
                  className="mr-2"
                  id="message-input"
                  name="message-input"
                  rows={8}
                  value={message}
                  onChange={this.onMessageChange} />
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

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clipboard from 'react-clipboard.js';
import paypal from 'paypal-checkout';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { completePayment, createPayment } from './api';

const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

const paypalButtonStyle = {
  label: 'paypal',
  size: 'medium',
  shape: 'rect',
  color: 'blue',
  tagline: false
};

const inputs = [
  {
    title: 'Full name',
    name: 'fullName'
  },
  {
    title: 'Email',
    name: 'email',
    type: 'email'
  },
  {
    title: 'Address',
    name: 'address'
  },
  {
    title: 'Company name',
    name: 'companyName'
  }
];

class BuyForm extends Component {
  state = {
    address: '',
    companyName: '',
    email: '',
    fullName: '',
    licenseKey: null,
    vatin: ''
  };

  onAuthorize = async (data, actions) => actions.payment.execute().then(async () => {
    const { paymentID: paymentId } = data;
    const licenseKey = await completePayment(paymentId);
    this.setState({ licenseKey });
  });

  onLicenseClick = (event) => event.target.select();

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  payment = () => createPayment({
    address: this.state.address,
    companyName: this.state.companyName,
    email: this.state.email,
    fullName: this.state.fullName,
    vatin: this.state.vatin
  });

  render() {
    const { licenseKey, companyName } = this.state;

    if (licenseKey) {
      return (
        <div>
          <h6>
            You have successfully bought R-Factor!
            <br />
            Here is your license key:
          </h6>
          <textarea
            readOnly
            className="mt-2 w-100"
            defaultValue={licenseKey}
            onClick={this.onLicenseClick} />
          <Clipboard className="float-right btn btn-primary" data-clipboard-text={this.state.licenseKey}>
            Copy
          </Clipboard>
        </div>
      );
    }

    return (
      <Form onSubmit={this.onSubmit}>
        {inputs.map((input) => (
          <FormGroup row key={input.name}>
            <Label sm={4} size="sm">{input.title}:</Label>
            <Col sm={8}>
              <Input
                type={input.type}
                name={input.name}
                bsSize="sm"
                onChange={this.onInputChange} />
            </Col>
          </FormGroup>
        ))}
        {companyName && (
          <FormGroup row>
            <Label sm={4} size="sm">NIP / VATIN:</Label>
            <Col sm={8}>
              <Input
                name="vatin"
                bsSize="sm"
                onChange={this.onInputChange} />
            </Col>
          </FormGroup>
        )}
        <PayPalButton
          commit
          className="float-right"
          style={paypalButtonStyle}
          env="sandbox"
          client={{
            sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID
          }}
          payment={(data, actions) => this.payment(data, actions)}
          onAuthorize={(data, actions) => this.onAuthorize(data, actions)} />
      </Form>
    );
  }
}

export default BuyForm;

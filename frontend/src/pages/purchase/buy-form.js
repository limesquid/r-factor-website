import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clipboard from 'react-clipboard.js';
import paypal from 'paypal-checkout';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { completePayment, createPayment } from './api';

const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

const paypalButtonStyle = {
  label: 'paypal',
  size: 'medium',
  shape: 'rect',
  color: 'blue',
  tagline: false
};

class BuyForm extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.fullNameRef = React.createRef();
    this.state = {
      licenseKey: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsbmFtZSI6Ill1cml5IFlha3ltIiwiZW1haWwiOiJ5YWt5bS55dXJpeUBnbWFpbC5jb20iLCJrZXkiOiJhMjZiNDU0MTg0ZGQwOTZhYTA1MWUzM2M5NTQyYjJjMzQ0MWZkZGJiNGEwZDgzZDNhZWQ3MTgxYjVkNWEwMTc3IiwiaWF0IjoxNTMzNjU4OTE1fQ.GsuDuiA5mJ03zJm7D-hKWyieZFPBF481lTRTQ7tHw1n2Gsan4Nj2lIxXHnZow3yCMvcpLYzXu9ohX_2PNRBVoR7lJXxAdgkDPFoobfWpm6kS5sBQv-EW3ShDO7e2uTGfvkgfdMQ6U4JT8UbYxF_jjlOBj4fnNzMCCVDj8EVmA9DZE1zWhL_TI5kDggX3Q2qocfHrnEmEnoVNORzqUq9uDgL8K-SHfsZ1k-ewuVR_3z0s5KljfZWMxwtCRQqjlGFsnqQBMwRcTJPLJJlesHoyrh764UgIpjo2RHFPOpWsm8gDH90j9jlHcC4DTB09DQOrf2u2MNeA1cxy270cNtCp9Q'
    };
  }

  onAuthorize = async (data, actions) => actions.payment.execute().then(async () => {
    console.log(data);
    const licenseKey = await completePayment();
    this.setState({ licenseKey });
  });

  onLicenseClick = (event) => event.target.select();

  payment = () => createPayment({
    fullName: this.fullNameRef.current.value,
    email: this.emailRef.current.value
  });

  render() {
    const { licenseKey } = this.state;

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
        <FormGroup row>
          <Label sm={3} size="sm">Full name:</Label>
          <Col sm={9}>
            <Input ref={this.fullNameRef} type="text" bsSize="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3} size="sm">Email</Label>
          <Col sm={9}>
            <Input ref={this.emailRef} type="email" bsSize="sm" />
          </Col>
        </FormGroup>
        <PayPalButton
          commit
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

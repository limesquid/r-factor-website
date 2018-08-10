import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { createPayment } from './api';

const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

const paypalButtonStyle = {
  label: 'paypal',
  size: 'medium',
  shape: 'rect',
  color: 'blue',
  tagline: false
};
console.log(process.env.REACT_APP_PAYPAL_CLIENT_ID);
class BuyForm extends Component {

  onAuthorize = (data, actions) => actions.payment.execute().then(() => {
    console.log('Hurra, you have bought a r-factor tool');
  });

  payment = () => createPayment();

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup className="has-danger" row>
          <Label sm={3} size="sm">Full name:</Label>
          <Col sm={9}>
            <Input type="email" name="email" className="border-light" bsSize="sm" />
          </Col>
          <div className="invalid-feedback">Sorry, that username's taken. Try another?</div>
        </FormGroup>
        <FormGroup row>
          <Label sm={3} size="sm">Email</Label>
          <Col sm={9}>
            <Input type="email" name="email" id="exampleEmail" bsSize="sm" />
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

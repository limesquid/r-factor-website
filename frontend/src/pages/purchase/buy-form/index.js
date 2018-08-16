import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import { Form } from 'reactstrap';
import { completePayment, createPayment } from './api';
import FormInput from './form-input';
import LicenseKey from './license-key';

const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });
const PAY_PAL_ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

const paypalButtonStyle = {
  label: 'buynow',
  fundingicons: true,
  branding: true,
  size: 'medium',
  shape: 'rect',
  color: 'blue',
  tagline: false
};

class BuyForm extends Component {
  constructor(props) {
    super(props);
    this.paypalActions = null;
    this.state = {
      address: '',
      companyName: '',
      email: '',
      fullName: '',
      licenseKey: null,
      vatin: '',
      shouldValidate: false
    };
  }

  onAuthorize = async (data, actions) => actions.payment.execute().then(
    async () => {
      const { paymentID: paymentId } = data;
      const licenseKey = await completePayment(paymentId);
      this.setState({ licenseKey });
    }
  );

  onLicenseClick = (event) => event.target.select();

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.validate);
  }

  payment = () => createPayment({
    address: this.state.address,
    companyName: this.state.companyName,
    email: this.state.email,
    fullName: this.state.fullName,
    vatin: this.state.vatin
  });

  enableValidation = () => {
    this.setState({ shouldValidate: true });
  };

  setPayPalActions = (actions) => {
    actions.disable();
    this.actions = actions;
  };

  validate = () => {
    const { fullName, email, address, companyName, vatin } = this.state;

    if (fullName && email && address && (!companyName || vatin)) {
      this.actions.enable();
      return;
    }

    this.actions.disable();
  };

  render() {
    const { address, companyName, email, licenseKey, fullName, shouldValidate, vatin } = this.state;

    if (licenseKey) {
      return (
        <LicenseKey
          licenseKey={licenseKey}
          onClick={this.onLicenseClick} />
      );
    }

    return (
      <Form onSubmit={this.onSubmit}>
        <FormInput
          required
          name="fullName"
          title="Full name"
          value={fullName}
          invalid={shouldValidate && !fullName}
          onChange={this.onInputChange} />

        <FormInput
          required
          name="email"
          title="Email"
          value={email}
          invalid={shouldValidate && !email}
          onChange={this.onInputChange} />

        <FormInput
          required
          name="address"
          title="Address"
          value={address}
          invalid={shouldValidate && !address}
          onChange={this.onInputChange} />

        <FormInput
          name="companyName"
          title="Company"
          value={companyName}
          onChange={this.onInputChange} />

        {companyName && (
          <FormInput
            required
            name="vatin"
            title="NIP / VATIN"
            value={vatin}
            invalid={shouldValidate && !vatin}
            onChange={this.onInputChange} />
        )}

        <div className="text-center mt-5">
          <PayPalButton
            commit
            style={paypalButtonStyle}
            env={PAY_PAL_ENV}
            client={{
              sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID,
              production: process.env.REACT_APP_PAYPAL_CLIENT_ID
            }}
            onClick={this.enableValidation}
            validate={this.setPayPalActions}
            payment={(data, actions) => this.payment(data, actions)}
            onAuthorize={(data, actions) => this.onAuthorize(data, actions)} />
        </div>
      </Form>
    );
  }
}

export default BuyForm;

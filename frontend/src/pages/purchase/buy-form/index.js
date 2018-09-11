import React, { Component } from 'react';
import { Form } from 'reactstrap';
// import { completePayment, createPayment } from './api';
import FormInput from './form-input';
import LicenseKey from './license-key';
import PayuWidget from './payu-widget';

class BuyForm extends Component {
  constructor(props) {
    super(props);
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

  onLicenseClick = (event) => event.target.select();

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.validate);
  }

  enableValidation = () => {
    this.setState({ shouldValidate: true });
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
          <PayuWidget email={email} />
        </div>
      </Form>
    );
  }
}

export default BuyForm;

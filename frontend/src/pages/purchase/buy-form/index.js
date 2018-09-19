import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Form } from 'reactstrap';
import FormInput from './form-input';
import PayuButton from './payu-button';

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

  componentDidMount() {
    document.querySelector('input').focus();
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.validate);
  };

  enableValidation = () => {
    this.setState({ shouldValidate: true });
  };

  render() {
    const { address, companyName, email, fullName, shouldValidate, vatin } = this.state;
    const isValid = Boolean(email && fullName && address && (!companyName || companyName && vatin));

    return (
      <div>
        <Helmet>
          <title>R-Factor - Buy license</title>
        </Helmet>

        <Form onSubmit={(event) => event.preventDefault()}>
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
            title="Company name"
            value={companyName}
            onChange={this.onInputChange} />

          {companyName && (
            <FormInput
              required
              name="vatin"
              title="VATIN / NIP"
              value={vatin}
              invalid={shouldValidate && !vatin}
              onChange={this.onInputChange} />
          )}

          <div className="text-center mt-5">
            <PayuButton
              email={email}
              address={address}
              companyName={companyName}
              fullName={fullName}
              vatin={vatin}
              isValid={isValid}
              onShowErrorMessages={this.enableValidation} />
          </div>
        </Form>
      </div>
    );
  }
}

export default BuyForm;

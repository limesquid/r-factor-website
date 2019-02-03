import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Form, FormGroup, Label } from 'reactstrap';
import { validate as validateEmail } from 'email-validator';
import Link from 'components/link';
import countries from './countries';
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
      countryCode: '',
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
    const { address, companyName, countryCode, email, fullName, shouldValidate, vatin } = this.state;
    const isEmailValid = validateEmail(email);
    const areCompanyDetailsValid = (!companyName || companyName && vatin);
    const isValid = Boolean(countryCode && isEmailValid && fullName && address && areCompanyDetailsValid);

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
            invalid={shouldValidate && !isEmailValid}
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

          <FormInput
            required
            name="address"
            title="Address"
            value={address}
            invalid={shouldValidate && !address}
            onChange={this.onInputChange} />

          <FormInput
            required
            type="select"
            name="countryCode"
            title="Country"
            value={countryCode}
            invalid={shouldValidate && !countryCode}
            onChange={this.onInputChange}>
            <option disabled value="">Select country</option>
            {countries.map(({ code, name }) => (
              <option key={code} value={code}>{name}</option>
            ))}
            <option value="other">Other</option>
          </FormInput>

          <div className="text-justify text-muted mt-4">
            License keys are issued by <span className="text-body">Kamil Mielnik</span>
            {' '}(Kraków, Poland), and covered by the
            {' '}<Link label="End-User License Agreement (EULA)" href="/eula" />.
            When you buy a license, you agree to its terms.
          </div>

          <div className="text-center mt-4">
            <PayuButton
              email={email}
              address={address}
              companyName={companyName}
              fullName={fullName}
              vatin={vatin}
              isPolishCustomer={countryCode === 'PL'}
              isValid={isValid}
              onShowErrorMessages={this.enableValidation} />
          </div>
        </Form>
      </div>
    );
  }
}

export default BuyForm;

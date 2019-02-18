import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Form } from 'reactstrap';
import isEmail from 'validator/lib/isEmail';
import Link from 'components/link';
import { COUNTRIES, isEuCountry } from '../../../utils/countries';
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
    const isEmailValid = isEmail(email);
    const areCompanyDetailsValid = !companyName || !isEuCountry(countryCode) || vatin;
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
            {COUNTRIES.map(({ code, name }) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </FormInput>

          <FormInput
            name="companyName"
            title="Company name"
            value={companyName}
            onChange={this.onInputChange} />

          {companyName && (
            <FormInput
              required={isEuCountry(countryCode)}
              name="vatin"
              title="NIP / VAT"
              value={vatin}
              invalid={shouldValidate && !vatin && isEuCountry(countryCode)}
              onChange={this.onInputChange} />
          )}

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
              countryCode={countryCode}
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

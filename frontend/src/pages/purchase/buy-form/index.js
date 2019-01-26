import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Form } from 'reactstrap';
import Link from 'components/link';
import FormInput from './form-input';
import PayuButton from './payu-button';
import './styles.css';

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
      isPolishCustomer: false,
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

  onCheckboxInputChang = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked }, this.validate);
  };

  enableValidation = () => {
    this.setState({ shouldValidate: true });
  };

  render() {
    const { address, companyName, email, fullName, isPolishCustomer, shouldValidate, vatin } = this.state;
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
            row
            className="checkbox-form-group"
            type="checkbox"
            name="isPolishCustomer"
            title="Polish customer"
            value={isPolishCustomer}
            onChange={this.onCheckboxInputChang} />

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

          <div className="text-justify text-muted mt-4">
            License keys are issued by <span className="text-body">Kamil Mielnik</span>
            {' '}(Tarnów, Poland), and covered by the
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
              isPolishCustomer={isPolishCustomer}
              isValid={isValid}
              onShowErrorMessages={this.enableValidation} />
          </div>
        </Form>
      </div>
    );
  }
}

export default BuyForm;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import Alert from 'reactstrap/lib/Alert';
import { mastercardLogoUrl, payuLogoUrl, visaLogoUrl } from 'data';
import { createPayment } from './api';

const PAYU_URL = 'https://www.payu.com/';
const LICENSE_FEE = parseInt(process.env.REACT_APP_LICENSE_FEE, 10) / 100;
const VAT_COUNTRY_CODES = [ 'PL' ];

const CREDIT_CARD_IMAGE_HEIGHT = 35;

const payuLogoStyle = {
  backgroundImage: `url(${payuLogoUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  display: 'block',
  height: 25,
  position: 'relative',
  top: -1,
  width: 50
};

class PayuButton extends Component {
  static propTypes = {
    countryCode: PropTypes.string,
    email: PropTypes.any,
    isValid: PropTypes.bool,
    onShowErrorMessages: PropTypes.func.isRequired
  };

  state = {
    error: null
  };

  onClick = () => {
    const { isValid, onShowErrorMessages } = this.props;
    if (!isValid) {
      onShowErrorMessages();
      return;
    }

    this.onCreatePayment();
  };

  onCreatePayment = async () => {
    const { address, companyName, countryCode, email, fullName, vatin } = this.props;
    try {
      const redirectUri = await createPayment({ address, companyName, countryCode, email, fullName, vatin });
      window.location.href = redirectUri;
    } catch (error) {
      if (typeof error === 'string') {
        this.setState({ error });
      } else if (error && error.message === 'Failed to fetch') {
        this.setState({ error: 'Network error occurred. Check your internet connection and try again.' });
      } else {
        this.setState({ error: 'Unknown error. Please try again or contact support.' });
      }
    }
  };

  render() {
    const { countryCode } = this.props;
    const { error } = this.state;
    const isVatIncluded = VAT_COUNTRY_CODES.includes(countryCode);

    return (
      <div>
        {error && (
          <Alert color="danger">
            {error}
          </Alert>
        )}

        <div className="d-flex justify-content-center">
          <Button className="text-white px-4" color="warning" onClick={this.onClick}>
            Buy R-Factor for {LICENSE_FEE.toFixed(2)} {process.env.REACT_APP_LICENSE_CURRENCY_CODE}
            {isVatIncluded && (
              <span>&nbsp;(+{process.env.REACT_APP_VAT_RATE}% VAT)</span>
            )}
          </Button>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-3 text-muted">
          <img
            className="mr-1"
            alt="Mastercard"
            title="Mastercard"
            height={CREDIT_CARD_IMAGE_HEIGHT}
            src={mastercardLogoUrl} />
          <img alt="Visa" title="Visa" height={CREDIT_CARD_IMAGE_HEIGHT} src={visaLogoUrl} />
        </div>

        <div className="d-flex justify-content-center align-items-center mt-2 text-muted">
          Payments secured by{' '}
          <a
            className="ml-2"
            target="_blank"
            rel="noopener noreferrer"
            href={PAYU_URL}
            style={payuLogoStyle}
            title="PayU" />
        </div>
      </div>
    );
  }
}

export default PayuButton;

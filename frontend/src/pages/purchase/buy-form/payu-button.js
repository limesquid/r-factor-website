import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import Alert from 'reactstrap/lib/Alert';
import { createPayment } from './api';

class PayuButton extends Component {
  static propTypes = {
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
    const { email, address, companyName, fullName, vatin } = this.props;
    try {
      const redirectUri = await createPayment({ email, address, companyName, fullName, vatin });
      window.location.href = redirectUri;
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error } = this.state;

    return (
      <div>
        {error && (
          <Alert bgStyle="danger">
            {error}
          </Alert>
        )}

        <Button onClick={this.onClick}>
          Buy
        </Button>
      </div>
    );
  }
}

export default PayuButton;

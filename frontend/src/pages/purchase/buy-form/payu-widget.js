import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import sha256 from 'crypto-js/sha256';
import Button from 'reactstrap/lib/Button';

const CURRENCY_CODE = 'PLN';
const CUSTOMER_LANGUAGE = 'en';
const MERCHANT_POS_ID = process.env.REACT_APP_PAYU_POS_ID;
const TOTAL_AMOUNT = 1999;
const SHOP_NAME = 'R-Factor';
const STORE_CARD = 'false';
const RECURRING_PAYMENT = 'false';
const PAYU_BRAND = 'true';
const WIDGET_MODE = 'pay';

window.test__ = () => alert(123);

const getSig = ({ email: CUSTOMER_EMAIL }) => {
  const secondKey = process.env.REACT_APP_PAYU_SECOND_KEY;

  const paramsString = [
    CURRENCY_CODE,
    CUSTOMER_EMAIL,
    CUSTOMER_LANGUAGE,
    MERCHANT_POS_ID,
    PAYU_BRAND,
    RECURRING_PAYMENT,
    SHOP_NAME,
    STORE_CARD,
    TOTAL_AMOUNT,
    WIDGET_MODE,
    secondKey
  ].join('');

  return sha256(paramsString);
};

class PayuWidget extends Component {
  static propTypes = {
    email: PropTypes.any
  };

  state = {
    shouldLoadScript: false
  };

  onLoadScript = () => {
    this.setState({ shouldLoadScript: true });
  };

  tryToOpenCheckoutModal = () => {
    if ('PayU' in window) {
      window.PayU.Merchant.openWidget();
      return;
    }

    setTimeout(this.tryToOpenCheckoutModal, 50);
  }

  render() {
    const { shouldLoadScript } = this.state;
    const { email } = this.props;
    const sig = shouldLoadScript ? getSig({ email }) : '';

    return (
      <Fragment>
        {shouldLoadScript && (
          <Helmet onChangeClientState={this.tryToOpenCheckoutModal}>
            <script
              src="https://secure.snd.payu.com/front/widget/js/payu-bootstrap.js"
              merchant-pos-id={MERCHANT_POS_ID}
              shop-name={SHOP_NAME}
              total-amount={TOTAL_AMOUNT}
              currency-code={CURRENCY_CODE}
              customer-language={CUSTOMER_LANGUAGE}
              store-card={STORE_CARD}
              customer-email={email}
              payu-brand={PAYU_BRAND}
              recurring-payment={RECURRING_PAYMENT}
              widget-mode={WIDGET_MODE}
              success-callback="test__"
              sig={sig} />
          </Helmet>
        )}

        <form action="http://exampledomain.com/processOrder.php" method="post">
          <Button disabled={shouldLoadScript} onClick={this.onLoadScript}>
            Buy
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default PayuWidget;

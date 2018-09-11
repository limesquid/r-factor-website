import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Button from 'reactstrap/lib/Button';

const getSig = ({ email: customerEmail }) => {
  const currencyCode = 'USD';
  const customerLanguage = 'en';
  const merchantPosId = process.env.REACT_APP_PAYU_POS_ID;
  const shopName = 'R-Factor';
  const totalAmount = process.env.REACT_APP_LICENSE_FEE * 100;
  const secondKey = process.env.REACT_APP_PAYU_SECOND_KEY;

  const paramsString = [
    currencyCode,
    customerEmail,
    customerLanguage,
    merchantPosId,
    shopName,
    totalAmount,
    secondKey
  ].join('');

  return sha256(paramsString);
};

class PayuWidget extends Component {
  static propTypes = {
    email: PropTypes.any
  };

  render() {
    const { email } = this.props;

    return (
      <Fragment>
        <Helmet>
          <script
            src="https://secure.payu.com/front/widget/js/payu-bootstrap.js"
            pay-button="#pay-button"
            merchant-pos-id="145227"
            shop-name="Nazwa sklepu"
            total-amount="9.99"
            currency-code="PLN"
            customer-language="pl"
            store-card="true"
            customer-email="email@exampledomain.com"
            sig="250f5f53e465777b6fefb04f171a21b598ccceb2899fc9f229604ad529c69532" />
        </Helmet>

        <form action="http://exampledomain.com/processOrder.php" method="post">
          <Button id="pay-button">Buy</Button>
        </form>
      </Fragment>
    );
  }
}

export default PayuWidget;

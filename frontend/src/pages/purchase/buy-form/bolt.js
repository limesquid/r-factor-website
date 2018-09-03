import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Button from 'reactstrap/lib/Button';

const BOLT_SCRIPT = process.env.NODE_ENV === 'production'
  ? 'https://sboxcheckout-static.citruspay.com/bolt/run/bolt.min.js'
  : 'https://checkout-static.citruspay.com/bolt/run/bolt.min.js';

class Bolt extends Component {
  onBuy = () => {
    const data = {
      key: 'rjQUPktU',
      txnid: '123456789',
      hash: 'defdfaadgerhetiwerer',
      amount: '1',
      firstname: 'Jaysinh',
      email: 'dummyemail@dummy.com',
      phone: '6111111111',
      productinfo: 'Bag',
      surl: 'https://sucess-url.in',
      furl: 'https://fail-url.in',
      mode:'dropout'
    };
    window.bolt.launch(data, this);
  };

  render() {
    return (
      <Fragment>
        <Helmet>
          <script
            id="bolt"
            src={BOLT_SCRIPT}
            bolt-color="#000"
            bolt-logo="<image path>" />
        </Helmet>
        <Button bsStyle="primary" onClick={this.onBuy}>
          Primary
        </Button>
      </Fragment>
    );
  }
}

export default Bolt;

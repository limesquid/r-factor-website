/* eslint-disable camelcase */

const request = require('request-promise-native');
const btoa = require('btoa');

const PAYPAL_API = 'https://api.sandbox.paypal.com/v1';
const BASIC_AUTHENTICATION_TOKEN = btoa(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`);

const getNewAccessToken = () => request({
  method: 'POST',
  url: `${PAYPAL_API}/oauth2/token`,
  qs: {
    grant_type: 'client_credentials' // eslint-disable-line
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Authorization: `Basic ${BASIC_AUTHENTICATION_TOKEN}`
  },
  json: true
}).then(({ access_token, expires_in }) => ({
  accessToken: access_token,
  expiresIn: expires_in
}));

const getAccessToken = (() => {
  let accessToken = null;
  let expiresAt = null;

  return async () => {
    if (!accessToken || expiresAt <= Number(new Date())) {
      const newAccessTokenDetails = await getNewAccessToken();
      accessToken = newAccessTokenDetails.accessToken;
      expiresAt = Number(new Date()) + newAccessTokenDetails.expiresIn;
    }
    return accessToken;
  };
})();

const createPayment = async () => request({
  url: `${PAYPAL_API}/payments/payment`,
  method: 'POST',
  json: true,
  headers: {
    Authorization: `Bearer ${await getAccessToken()}`
  },
  body: {
    intent: 'sale',
    redirect_urls: {
      return_url: 'http://example.com/your_redirect_url.html',
      cancel_url: 'http://example.com/your_cancel_url.html'
    },
    payer: {
      payment_method: 'paypal'
    },
    transactions: [
      {
        amount: {
          total: 35.0,
          currency: 'USD'
        }
      }
    ]
  }
});

module.exports = {
  createPayment
};

/* eslint-disable camelcase */

const request = require('request-promise-native');
const payPalAccessTokenManager = require('../../utils/pay-pal-access-token-manager');

const PAY_PAL_API = process.env.PAY_PAL_API;

const createPayment = async () => request({
  url: `${PAY_PAL_API}/payments/payment`,
  method: 'POST',
  json: true,
  headers: {
    Authorization: `Bearer ${await payPalAccessTokenManager.getToken()}`
  },
  body: {
    intent: 'sale',
    redirect_urls: {
      return_url: 'http://r-factor.io/buy?success',
      cancel_url: 'http://r-factor.io/buy?failure'
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

const request = require('request-promise-native');
const btoa = require('btoa');

const PAY_PAL_API = process.env.PAY_PAL_API;
const BASIC_AUTHENTICATION_TOKEN = btoa(`${process.env.PAY_PAL_CLIENT_ID}:${process.env.PAY_PAL_SECRET}`);
const SESSTION_TIMEOUT_OFFSET = -10000;

class PayPalAccessTokenManager {
  constructor() {
    this.accessToken = null;
    this.expiresAt = null;
  }

  async refreshToken() {
    const tokenDetails = await request({
      method: 'POST',
      url: `${PAY_PAL_API}/oauth2/token`,
      qs: {
        grant_type: 'client_credentials' // eslint-disable-line
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: `Basic ${BASIC_AUTHENTICATION_TOKEN}`
      },
      json: true
    });

    this.accessToken = tokenDetails.access_token;
    this.expiresAt = Number(new Date()) + tokenDetails.expires_in - SESSTION_TIMEOUT_OFFSET;
  }

  async getToken() {
    if (!this.accessToken || this.expiresAt <= Number(new Date())) {
      await this.refreshToken();
    }
    return this.accessToken;
  }
}

module.exports = new PayPalAccessTokenManager();

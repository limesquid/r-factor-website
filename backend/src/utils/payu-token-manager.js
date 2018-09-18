/* eslint-disable camelcase */
const request = require('request-promise-native');
const logger = require('../logger');

const SESSTION_TIMEOUT_OFFSET = -10000;

class PayuTokenManager {
  constructor() {
    this.accessToken = null;
    this.expiresAt = null;
  }

  async refreshToken(retries = 3) {
    try {
      const tokenDetails = await request({
        method: 'POST',
        url: `${process.env.PAYU_API_HOST}/pl/standard/user/oauth/authorize`,
        qs: {
          grant_type: 'client_credentials',
          client_id: process.env.PAYU_CLIENT_ID,
          client_secret: process.env.PAYU_CLIENT_SECRET
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        json: true
      });

      this.accessToken = tokenDetails.access_token;
      this.expiresAt = Date.now() + tokenDetails.expires_in * 1000 - SESSTION_TIMEOUT_OFFSET;
    } catch (error) {
      if (retries === 0) {
        logger.log('error', 'Error while retrieving access_token');
        throw new Error('Could not retrieve a new access_token');
      }

      await new Promise((resolve) => {
        setTimeout(async () => {
          await this.refreshToken(retries - 1);
          resolve();
        }, 1000);
      });
    }

    return null;
  }

  async getToken() {
    if (!this.accessToken || this.expiresAt <= Number(new Date())) {
      await this.refreshToken();
    }
    return this.accessToken;
  }
}

module.exports = new PayuTokenManager();

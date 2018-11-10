const request = require('request-promise-native');
const payuTokenManager = require('../../utils/payu-token-manager');
const {
  PAYMENT_CREATION_ERROR_MESSAGE,
  PAYMENT_VALIDATION_ERROR_MESSAGE
} = require('./constants');

const DESCRIPTION = 'R-Factor';
const TOTAL_AMOUNT = Math.round(parseFloat(process.env.LICENSE_FEE) * 100);
const PAYU_STATUS_COMPLETED = 'COMPLETED';
const COMPLETE_PAYMENT_URL = process.env.NODE_ENV === 'production'
  ? `${process.env.API_HOST}/complete-payment`
  : `${process.env.API_HOST}:3000/complete-payment`;

const createPayment = async ({
  internalOrderId,
  customerIp,
  buyer
}) => {
  const products = [
    {
      name: 'R-Factor: license key',
      unitPrice: TOTAL_AMOUNT,
      quantity: 1
    }
  ];

  const payload = {
    buyer,
    customerIp,
    products,
    continueUrl: `${COMPLETE_PAYMENT_URL}/${internalOrderId}`,
    currencyCode: process.env.LICENSE_CURRENCY_CODE,
    description: DESCRIPTION,
    extOrderId: internalOrderId,
    merchantPosId: process.env.PAYU_MERCHANT_POS_ID,
    totalAmount: TOTAL_AMOUNT
  };

  try {
    const token = await payuTokenManager.getToken();
    const { orderId, redirectUri, status } = await request({
      method: 'POST',
      url: `${process.env.PAYU_API_HOST}/api/v2_1/orders`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: payload,
      json: true,
      simple: false
    });

    if (!orderId || !redirectUri) {
      throw new Error(status.statusCode);
    }

    return { orderId, redirectUri };
  } catch (error) {
    throw new Error(`${PAYMENT_CREATION_ERROR_MESSAGE}: ${error}`);
  }
};

const validatePayment = async (orderId) => {
  try {
    const token = await payuTokenManager.getToken();
    const { orders: [ order ] } = await request({
      url: `${process.env.PAYU_API_HOST}/api/v2_1/orders/${orderId}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
      json: true
    });
    return order.status === PAYU_STATUS_COMPLETED;
  } catch (error) {
    throw new Error(`${PAYMENT_VALIDATION_ERROR_MESSAGE}: ${error}`);
  }
};

module.exports = {
  createPayment,
  validatePayment
};

const request = require('request-promise-native');
const payuTokenManager = require('../../utils/payu-token-manager');
const {
  PAYMENT_CREATION_ERROR_MESSAGE,
  PAYMENT_VALIDATION_ERROR_MESSAGE
} = require('./constants');

const MERCHANT_POS_ID = process.env.PAYU_MERCHANT_POS_ID;
const CURRENCY_CODE = 'PLN';
const DESCRIPTION = 'R-Factor';
const TOTAL_AMOUNT = process.env.LICENSE_PRICE;
const PAYU_STATUS_COMPLETED = 'COMPLETED';

const createPayment = async ({
  host,
  internalOrderId,
  customerIp,
  buyer
}) => {
  const products = [
    {
      name: 'R-Factor: license key',
      unitPrice: (Number(process.env.LICENSE_PRICE) * 100).toFixed(2),
      quantity: 1
    }
  ];

  const payload = {
    buyer,
    customerIp,
    products,
    continueUrl: `${host}/complete-payment?externalOrderId=${internalOrderId}`,
    currencyCode: CURRENCY_CODE,
    description: DESCRIPTION,
    extOrderId: internalOrderId,
    merchantPosId: MERCHANT_POS_ID,
    totalAmount: TOTAL_AMOUNT
  };

  const token = await payuTokenManager.getToken();

  try {
    const { orderId, redirectUri } = await request({
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

    return { orderId, redirectUri };
  } catch (error) {
    throw new Error(`${PAYMENT_CREATION_ERROR_MESSAGE}: ${error}`);
  }
};

const validatePayment = async (orderId) => {
  const token = await payuTokenManager.getToken();
  try {
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

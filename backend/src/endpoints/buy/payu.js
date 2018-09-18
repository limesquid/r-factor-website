const request = require('request-promise-native');
const payuTokenManager = require('../../utils/payu-token-manager');

const MERCHANT_POS_ID = process.env.PAYU_MERCHANT_POS_ID;
const CURRENCY_CODE = 'PLN';
const DESCRIPTION = 'R-Factor';
const TOTAL_AMOUNT = process.env.LICENSE_PRICE;

const createPayment = async ({
  host,
  externalOrderId,
  customerIp,
  buyer
}) => {
  const products = [
    {
      name: 'R-Factor: license key',
      unitPrice: process.env.LICENSE_PRICE,
      quantity: 1
    }
  ];

  const token = await payuTokenManager.getToken();

  const payload = {
    buyer,
    customerIp,
    products,
    continueUrl: `${host}/license-key?externalOrderId=${externalOrderId}`,
    currencyCode: CURRENCY_CODE,
    description: DESCRIPTION,
    extOrderId: externalOrderId,
    merchantPosId: MERCHANT_POS_ID,
    totalAmount: TOTAL_AMOUNT
  };

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
    throw new Error(`Error while creating new PayU payment: ${error}`);
  }
};

module.exports = {
  createPayment
};

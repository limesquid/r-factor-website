import fetch from 'utils/fetch';

const BUY_API_URL = `${process.env.REACT_APP_API_URL}/buy`;

export const completePayment = (internalOrderId) => fetch(`${BUY_API_URL}/complete-payment`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ internalOrderId })
})
  .then((response) => response.json())
  .then(({ licenseKey }) => licenseKey);

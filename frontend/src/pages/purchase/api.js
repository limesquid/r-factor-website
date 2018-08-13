import fetch from 'utils/fetch';

const BUY_API = `${process.env.REACT_APP_API_URL}/buy/`;

export const createPayment = ({ fullName, email }) => fetch(`${BUY_API}/create-payment`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ fullName, email })
})
  .then((response) => response.json())
  .then(({ paymentId }) => paymentId);

export const completePayment = (paymentId) => fetch(`${BUY_API}/complete-payment`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ paymentId })
})
  .then((response) => response.json())
  .then(({ licenseKey }) => licenseKey);

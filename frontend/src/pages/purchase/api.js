import fetch from 'utils/fetch';

const BUY_API = `${process.env.REACT_APP_API_URL}/buy/`;

export const createPayment = (payload) => fetch(`${BUY_API}/create-payment`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
  .then((response) => response.json())
  .then(({ id }) => id);

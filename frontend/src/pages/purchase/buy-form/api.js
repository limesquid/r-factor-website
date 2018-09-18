import fetch from 'utils/fetch';

const BUY_API = `${process.env.REACT_APP_API_URL}/buy/`;

export const createPayment = ({ address, companyName, email, fullName, vatin }) => fetch(`${BUY_API}/create-payment`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ address, companyName, fullName, email, vatin })
})
  .then((response) => response.json())
  .then(({ redirectUri }) => redirectUri);

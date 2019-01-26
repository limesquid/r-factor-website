import fetch from 'utils/fetch';

const BUY_API_URL = `${process.env.REACT_APP_API_URL}/buy`;

export const createPayment = ({
  address,
  companyName,
  email,
  fullName,
  isPolishCustomer,
  vatin
}) => fetch(`${BUY_API_URL}/create-payment`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    address,
    companyName,
    fullName,
    email,
    isPolishCustomer,
    vatin
  })
})
  .then((response) => response.json())
  .then(({ redirectUri }) => redirectUri);

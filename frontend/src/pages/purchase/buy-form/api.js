import fetch from 'utils/fetch';

const BUY_API_URL = `${process.env.REACT_APP_API_URL}/buy`;

export const createPayment = ({
  address,
  companyName,
  countryCode,
  email,
  fullName,
  vatin
}) => fetch(`${BUY_API_URL}/create-payment`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    address,
    companyName,
    countryCode,
    fullName,
    email,
    vatin
  })
})
  .then((response) => response.json())
  .then(({ redirectUri }) => redirectUri);

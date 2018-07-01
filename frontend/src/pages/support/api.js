import fetch from 'utils/fetch';

const SUPPORT_URL = `${process.env.REACT_APP_API_URL}/support`;

export const postSupport = ({ email, message }) => fetch(SUPPORT_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email, message })
});

import fetch from 'utils/fetch';

const REFACTOR_URL = `${process.env.REACT_APP_API_URL}/refactor`;

export const postRefactor = (payload) => fetch(REFACTOR_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
});

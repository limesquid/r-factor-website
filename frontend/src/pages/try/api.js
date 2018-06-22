import fetch from 'utils/fetch';

const REFACTOR_URL = `${process.env.REACT_APP_API_URL}/refactor`;

export const postRefactor = ({ code, refactoring, settings }) => fetch(REFACTOR_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ code, refactoring, settings })
});

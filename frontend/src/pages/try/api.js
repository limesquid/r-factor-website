import fetch from 'utils/fetch';

export const postRefactor = ({ code, refactoring }) => fetch(`${process.env.API_URL}/refactor`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    code,
    refactoring
  })
});

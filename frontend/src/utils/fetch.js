export default (...params) => fetch(...params).then((response) => {
  if (!response.ok) {
    return response.text().then((error) => Promise.reject(error));
  }

  return Promise.resolve(response);
});

export default (...params) => fetch(...params).then((response) => {
  if (response.status < 200 || response.status >= 300) {
    const error = new Error(response.statusText || response.status);
    error.response = response;
    return Promise.reject(error);
  }

  return Promise.resolve(response);
});

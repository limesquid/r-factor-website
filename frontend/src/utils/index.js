export const formatError = (error) => {
  if (Array.isArray(error)) {
    return error.split('\n').filter(Boolean).join('\n');
  }
  if (String(error) === 'TypeError: Failed to fetch') {
    return 'Network error occurred. Check your internet connection and try again.';
  }
  return error;
};

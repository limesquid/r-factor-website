export const formatError = (error) => {
  if (Array.isArray(error)) {
    return error.split('\n').filter(Boolean).join('\n');
  }
  return 'Network error occurred. Check your internet connection and try again.';
};

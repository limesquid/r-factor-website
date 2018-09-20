export default process.env.REACT_APP_ENABLE_RECAPTCHA === 'true' ? require('./recaptcha') : () => null;

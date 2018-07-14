export default process.env.ENABLE_RECAPTCHA === 'true' ? require('./recaptcha') : () => null;

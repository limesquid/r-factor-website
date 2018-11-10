const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

const IS_DEV_ENV = process.env.NODE_ENV === 'development';
const IS_PROD_ENV = process.env.NODE_ENV === 'production';

const SRC_DIR = path.resolve(__dirname, 'src');
const ENTRY_FILE = path.resolve(SRC_DIR, 'index.js');
const DIST_DIR = path.resolve(__dirname, 'dist');
const BUNDLE_DIST = 'index.js';

module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    path: DIST_DIR,
    filename: BUNDLE_DIST
  },
  entry: [
    IS_DEV_ENV && 'webpack/hot/poll?1000',
    ENTRY_FILE
  ].filter(Boolean),
  resolve: {
    modules: [
      SRC_DIR,
      'node_modules'
    ],
    extensions: [ '.js' ]
  },
  target: 'node',
  watch: IS_DEV_ENV,
  externals: [
    IS_DEV_ENV && nodeExternals({
      whitelist: [
        /^scrabble-solver-commons/,
        'webpack/hot/poll?1000'
      ]
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(key|license)$/,
        use: 'raw-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    IS_DEV_ENV && new StartServerPlugin(BUNDLE_DIST),
    IS_DEV_ENV && new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin([
      'API_HOST',
      'NODE_ENV',
      'PAYU_API_HOST',
      'PAYU_MERCHANT_POS_ID',
      'PAYU_CLIENT_ID',
      'PAYU_CLIENT_SECRET',
      'ENABLE_RECAPTCHA',
      'SENDGRID_API_KEY',
      'RECAPTCHA_SITE_KEY',
      'RECAPTCHA_SECRET_KEY',
      'LICENSE_SECRET',
      'OUR_EMAIL',
      'COMPANY_NAME',
      'COMPANY_ADDRESS',
      'COMPANY_ID',
      'LICENSE_FEE',
      'LICENSE_CURRENCY_CODE'
    ])
  ].filter(Boolean)
};

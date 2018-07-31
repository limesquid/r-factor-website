import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Clipboard from 'clipboard';
import 'styles/bootstrap.min.css';
import 'styles/open-iconic-bootstrap.css';

// eslint-disable-next-line no-unused-vars
const clipboard = new Clipboard('.btn');

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

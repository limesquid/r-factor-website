import React from 'react';
import CookieConsentWrapper from 'react-cookie-consent-wrapper';

const CONFIG = {
  palette: {
    popup: {
      background: '#333'
    },
    button: {
      background: '#14a7d0'
    }
  },
  position: 'bottom-right'
};

const CookieConsent = () => (
  <CookieConsentWrapper loadStyles {...CONFIG} />
);

export default CookieConsent;

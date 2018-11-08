import configurationFeatures from './configuration';
import otherFeatures from './other';
import reactFeatures from './react';
import reduxFeatures from './redux';
import mastercardLogoUrl from 'assets/mastercard.svg';
import transparentLogoUrl from 'assets/logo-transparent.png';
import payuLogoUrl from 'assets/payu-logo-small.png';
import randyUrl from 'assets/randy.jpg';
import visaLogoUrl from 'assets/visa.svg';

export const videoUrl = '';

export const allFeatures = [ ...reactFeatures, ...reduxFeatures, ...otherFeatures ].sort(
  (a, b) => a.name.localeCompare(b.name)
);

export {
  configurationFeatures,
  otherFeatures,
  mastercardLogoUrl,
  payuLogoUrl,
  reactFeatures,
  reduxFeatures,
  randyUrl,
  transparentLogoUrl,
  visaLogoUrl
};

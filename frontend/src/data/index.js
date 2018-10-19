import configurationFeatures from './configuration';
import otherFeatures from './other';
import reactFeatures from './react';
import reduxFeatures from './redux';
import transparentLogoUrl from 'assets/logo-transparent.png';
import payuLogoUrl from 'assets/payu-logo.png';
import randyUrl from 'assets/randy.jpg';

export const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

export const allFeatures = [ ...reactFeatures, ...reduxFeatures, ...otherFeatures ].sort(
  (a, b) => a.name.localeCompare(b.name)
);

export {
  configurationFeatures,
  otherFeatures,
  payuLogoUrl,
  reactFeatures,
  reduxFeatures,
  randyUrl,
  transparentLogoUrl
};

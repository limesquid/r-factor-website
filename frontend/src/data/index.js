import configurationFeatures from './configuration';
import otherFeatures from './other';
import reactFeatures from './react';
import reduxFeatures from './redux';
import transparentLogoUrl from 'assets/logo-transparent.png';
import randyUrl from 'assets/randy.jpg';
import rFactorIconUrl from 'assets/r-factor-icon.png';

export const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

export const allFeatures = [ ...reactFeatures, ...reduxFeatures, ...otherFeatures ].sort(
  (a, b) => a.name.localeCompare(b.name)
);

export {
  configurationFeatures,
  otherFeatures,
  reactFeatures,
  reduxFeatures,
  randyUrl,
  rFactorIconUrl,
  transparentLogoUrl
};

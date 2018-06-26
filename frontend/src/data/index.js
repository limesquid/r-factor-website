import configurationFeatures from './configuration';
import otherFeatures from './other-features';
import reactFeatures from './react-features';
import reduxFeatures from './redux';
import transparentLogoUrl from 'assets/logo-transparent.png';

export const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

export const allFeatures = [ ...reactFeatures, ...reduxFeatures, ...otherFeatures ].sort(
  (a, b) => a.name.localeCompare(b.name)
);

export {
  configurationFeatures,
  otherFeatures,
  reactFeatures,
  reduxFeatures,
  transparentLogoUrl
};

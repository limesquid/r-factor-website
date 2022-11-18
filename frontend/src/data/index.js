import configurationFeatures from './configuration';
import otherFeatures from './other';
import reactFeatures from './react';
import reduxFeatures from './redux';
import transparentLogoUrl from 'assets/logo-transparent.png';
import randyUrl from 'assets/randy.jpg';

export const videoUrl = 'https://mega.nz/embed#!GrQgxIhQ!1glB3ceOFK2KaUxc57ol8b5XMYdfycM2W9fAuLLoBhE';

export const allFeatures = [ ...reactFeatures, ...reduxFeatures, ...otherFeatures ].sort(
  (a, b) => a.name.localeCompare(b.name)
);

export {
  configurationFeatures,
  otherFeatures,
  reactFeatures,
  reduxFeatures,
  randyUrl,
  transparentLogoUrl
};

/* eslint-disable max-len */

import React from 'react';
import { Helmet } from 'react-helmet';
import Cookies from './cookies';
import Introduction from './introduction';
import PersonalData from './personal-data';
import ShortVersion from './short-version';

const PrivacyPolicy = () => (
  <div>
    <Helmet>
      <title>R-Factor - Privacy Policy</title>
    </Helmet>

    <h1>Privacy Policy</h1>
    <div className="text-muted">
      <Introduction className="mt-2" />
      <ShortVersion className="mt-5" />
      <PersonalData className="mt-5" />
      <Cookies className="mt-5" />
    </div>
  </div>
);

export default PrivacyPolicy;

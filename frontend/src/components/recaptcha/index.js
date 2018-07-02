import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReactRecaptcha from 'react-recaptcha';
import Label from 'reactstrap/lib/Label';

export const RECAPTCHA_HEIGHT = 132;

const Recaptcha = ({ className, recaptchaRef, onVerify }) => (
  <div className={className}>
    <Label>We've heard you're a robot</Label>
    <ReactRecaptcha
      ref={recaptchaRef}
      render="explicit"
      sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      theme="dark"
      onloadCallback={() => null}
      verifyCallback={onVerify} />
    <Helmet>
      <script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer />
    </Helmet>
  </div>
);

Recaptcha.propTypes = {
  className: PropTypes.string,
  recaptchaRef: PropTypes.object.isRequired,
  onVerify: PropTypes.func.isRequired
};

export default Recaptcha;

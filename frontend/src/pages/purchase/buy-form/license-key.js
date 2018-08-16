import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'react-clipboard.js';

const LicenseKey = ({ licenseKey, onClick }) => (
  <div>
    <h6>
      You have successfully bought R-Factor!
      <br />
      Here is your license key:
    </h6>
    <textarea
      readOnly
      className="mt-2 w-100"
      defaultValue={licenseKey}
      onClick={this.onClick} />
    <Clipboard className="float-right btn btn-primary" data-clipboard-text={licenseKey}>
      Copy
    </Clipboard>
  </div>
);

LicenseKey.propTypes = {
  licenseKey: PropTypes.string,
  onClick: PropTypes.func
};

export default LicenseKey;

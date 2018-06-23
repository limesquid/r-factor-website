import React from 'react';
import RadioSetting from './radio-setting';

const options = {
  '\n': 'LF',
  '\r\n': 'CRLF'
};

const EndOfLine = (props) => (
  <RadioSetting
    id="end-of-line-select"
    label="End of line"
    options={options}
    {...props} />
);

export default EndOfLine;

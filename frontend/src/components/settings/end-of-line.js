import React from 'react';
import RadioSetting from 'components/radio-setting';

const options = [
  { label: 'LF', value: '\n' },
  { label: 'CRLF', value: '\r\n' }
];

const EndOfLine = (props) => (
  <RadioSetting
    id="end-of-line-select"
    label="End of line"
    options={options}
    {...props} />
);

export default EndOfLine;

import React from 'react';
import Setting from './setting';

const options = {
  '\n': 'Unix (LF)',
  '\r\n': 'Windows (CRLF)'
};

const EndOfLine = (props) => (
  <Setting
    id="end-of-line-select"
    label="End of line"
    options={options}
    {...props} />
);

export default EndOfLine;

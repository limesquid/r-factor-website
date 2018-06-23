import React from 'react';
import Setting from './setting';

const options = {
  1: '1 space',
  2: '2 spaces',
  4: '4 spaces',
  8: '8 spaces'
};

const Indent = (props) => (
  <Setting
    id="indent-select"
    label="Indent"
    mapValue={Number}
    options={options}
    {...props} />
);

export default Indent;

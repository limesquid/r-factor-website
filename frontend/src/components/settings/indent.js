import React from 'react';
import RadioSetting from './radio-setting';

const options = {
  1: '1 space',
  2: '2 spaces',
  4: '4 spaces',
  8: '8 spaces'
};

const Indent = (props) => (
  <RadioSetting
    id="indent-select"
    label="Indent"
    mapValue={Number}
    options={options}
    {...props} />
);

export default Indent;

import React from 'react';
import RadioSetting from './radio-setting';

const options = [
  { label: '2 spaces', value: 2 },
  { label: '4 spaces', value: 4 },
  { label: 'Tab', value: 'tab' }
];

const Indent = (props) => (
  <RadioSetting
    id="indent-select"
    label="Indent"
    options={options}
    {...props} />
);

export default Indent;

import React from 'react';
import RadioSetting from './radio-setting';

const options = [
  { label: 'Yes', value: true },
  { label: 'No', value: false }
];

const Semicolons = (props) => (
  <RadioSetting
    id="semicolons-select"
    label="Semicolons"
    options={options}
    {...props} />
);

export default Semicolons;

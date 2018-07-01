import React from 'react';
import RadioSetting from 'components/radio-setting';

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

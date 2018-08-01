import React from 'react';
import RadioSetting from 'components/radio-setting';

const options = [
  { label: 'No', value: false },
  { label: 'Yes', value: true }
];

const TrailingCommas = (props) => (
  <RadioSetting
    id="trailing-commas-select"
    label="Trailing commas"
    options={options}
    {...props} />
);

export default TrailingCommas;

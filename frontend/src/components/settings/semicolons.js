import React from 'react';
import RadioSetting from './radio-setting';

const options = {
  true: 'Yes',
  false: 'No'
};

const stringToBoolean = (value) => value === 'true';

const Semicolons = (props) => (
  <RadioSetting
    id="semicolons-select"
    label="Semicolons"
    mapValue={stringToBoolean}
    options={options}
    {...props} />
);

export default Semicolons;

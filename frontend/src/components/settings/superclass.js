import React from 'react';
import RadioSetting from './radio-setting';

const options = [
  { label: 'Component', value: 'Component' },
  { label: 'PureComponent', value: 'PureComponent' }
];

const Superclass = (props) => (
  <RadioSetting
    id="component-superclass-select"
    label="Component superclass"
    options={options}
    {...props} />
);

export default Superclass;

import React from 'react';
import RadioSetting from './radio-setting';

const options = [
  { label: 'Arrow function', value: 'arrow' },
  { label: 'Function', value: 'function' }
];

const FunctionalComponentType = (props) => (
  <RadioSetting
    id="functional-component-type-select"
    label="Functional component type"
    options={options}
    {...props} />
);

export default FunctionalComponentType;

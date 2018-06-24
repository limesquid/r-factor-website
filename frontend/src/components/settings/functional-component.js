import React from 'react';
import RadioSetting from './radio-setting';

const options = [
  { label: 'Arrow function', value: 'arrow' },
  { label: 'Function', value: 'function' }
];

const FunctionalComponent = (props) => (
  <RadioSetting
    id="functional-component-select"
    label="Functional component"
    options={options}
    {...props} />
);

export default FunctionalComponent;

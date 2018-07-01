import React from 'react';
import RadioSetting from 'components/radio-setting';

const options = [
  { label: 'Single', value: 'single' },
  { label: 'Double', value: 'double' },
  { label: 'Backtick', value: 'backtick' }
];

const Quotes = (props) => (
  <RadioSetting
    id="quotes-select"
    label="Quotes"
    options={options}
    {...props} />
);

export default Quotes;

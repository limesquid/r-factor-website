import React from 'react';
import RadioSetting from './radio-setting';

const options = {
  single: 'Single (\')',
  double: 'Double (")',
  backtick: 'Backtick (`)'
};

const Quotes = (props) => (
  <RadioSetting
    id="quotes-select"
    label="Quotes"
    options={options}
    {...props} />
);

export default Quotes;

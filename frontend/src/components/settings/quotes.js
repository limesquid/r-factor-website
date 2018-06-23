import React from 'react';
import Setting from './setting';

const options = {
  single: 'Single (\')',
  double: 'Double (")',
  backtick: 'Backtick (`)'
};

const Quotes = (props) => (
  <Setting
    id="quotes-select"
    label="Quotes"
    options={options}
    {...props} />
);

export default Quotes;

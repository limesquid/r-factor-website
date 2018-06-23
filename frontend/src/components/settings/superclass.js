import React from 'react';
import Setting from './setting';

const options = {
  Component: 'Component',
  PureComponent: 'PureComponent'
};

const Superclass = (props) => (
  <Setting
    id="component-superclass-select"
    label="Component superclass"
    options={options}
    {...props} />
);

export default Superclass;

import _ from 'lodash';
import React from 'react';

const Header = ({ onClick, children }) => (
  <div className="header" onClick={_.debounce(onClick, 100)}>
    {children}
  </div>
);

export default Header;

/*
1. sort attributes
2. convert to class component
3. generate proptypes
4. add classname
5. move proptypes out of class
6. sort imports
7. connect component
8. convert to functional component
9. disconnect component
*/

const input = `import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: _.noop
  };

  render() {
    const { onClick, children } = this.props;

    return (
      <div onClick={onClick}>
        {children}
      </div>
    );
  }
}

export default Header;
`;

const output = `import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onClick, children }) => (
  <div onClick={onClick}>
    {children}
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

Header.defaultProps = {
  onClick: _.noop
};

export default Header;
`;

export default { input, output };

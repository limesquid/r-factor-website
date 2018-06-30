const input = `import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="button">
        Button
      </div>
    );
  }
}

export default Button;
`;

const output = `import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames('button', className)}>
        Button
      </div>
    );
  }
}

export default Button;
`;

export default {
  name: 'Adds className to class component',
  input,
  output
};

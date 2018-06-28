const input = `import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { className, type, disabled, value } = this.props;

    return (
      <Input
        className={className}
        type={type}
        disabled={disabled}
        value={value}
        onChange={this.onChange} />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string
};

export default Input;
`;

const output = `import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { className, type, disabled, value } = this.props;

    return (
      <Input
        className={className}
        type={type}
        disabled={disabled}
        value={value}
        onChange={this.onChange} />
    );
  }
}

export default Input;
`;

export default { input, output };

const input = `import React from 'react';

const Input = ({ className, type, disabled, value, onChange }) => (
  <Input
    className={className}
    type={type}
    disabled={disabled}
    value={value}
    onChange={onChange} />
);

export default Input;`;

const output = `import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, type, disabled, value, onChange }) => (
  <Input
    className={className}
    type={type}
    disabled={disabled}
    value={value}
    onChange={onChange} />
);

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func
};

export default Input;`;

export default { input, output };

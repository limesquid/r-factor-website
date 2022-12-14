const input = `import React from 'react';

const Input = ({ className, type, value, ...props }) => {
  const disabled = props.disabled;
  const { onChange } = props;
  return (
    <Input
      className={className}
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange} />
  );
};

export default Input;
`;

const output = `import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, type, value, ...props }) => {
  const disabled = props.disabled;
  const { onChange } = props;
  return (
    <Input
      className={className}
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange} />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func
};

export default Input;
`;

export default {
  name: 'Generates new arrow component propTypes',
  input,
  output
};

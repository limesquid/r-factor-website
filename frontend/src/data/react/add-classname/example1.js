const input = `import React from 'react';

const Button = () => (
  <div>Button</div>
);

export default Button;
`;

const output = `import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className }) => (
  <div className={className}>Button</div>
);

Button.propTypes = {
  className: PropTypes.string
};

export default Button;
`;

export default {
  name: 'Adds className to arrow component',
  input,
  output
};

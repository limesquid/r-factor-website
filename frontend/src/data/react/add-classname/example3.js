const input = `import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({ disabled }) {
  return (
    <div className={classNames('button', { disabled })}>
      Button
    </div>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool
};

export default Button;
`;

const output = `import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({ className, disabled }) {
  return (
    <div className={classNames('button', { disabled }, className)}>
      Button
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
`;

export default {
  name: 'Adds className to function component',
  input,
  output
};

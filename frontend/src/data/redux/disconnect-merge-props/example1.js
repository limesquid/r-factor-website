const input = `import React from 'react';
import { connect } from 'react-redux';

const Button = () => (<span>Text</span>);

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(null, null, mergeProps)(Button);
`;

const output = `import React from 'react';

const Button = () => (<span>Text</span>);

export default Button;
`;

export default {
  name: 'Disconnect component from mergeProps (example 1)',
  input,
  output
};

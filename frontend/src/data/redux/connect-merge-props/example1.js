const input = `import React from 'react';

export const Button = ({ value }) => (
  <div>{value}</div>
);
`;

const output = `import React from 'react';
import { connect } from 'react-redux';

const ButtonComponent = ({ value }) => (
  <div>{value}</div>
);

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export const Button = connect(null, null, mergeProps)(ButtonComponent);
`;

export default {
  name: 'Connect component with mergeProps',
  input,
  output
};

const input = `import React from 'react';
import { connect } from 'react-redux';

const ButtonComponent = ({ value }) => (
  <div>{value}</div>
);

const mapStateToProps = (state) => ({
  
});

export const Button = connect(mapStateToProps)(ButtonComponent);
`;

const output = `import React from 'react';
import { connect } from 'react-redux';

const ButtonComponent = ({ value }) => (
  <div>{value}</div>
);

const mapStateToProps = (state) => ({
  
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export const Button = connect(mapStateToProps, null, mergeProps)(ButtonComponent);
`;

export default {
  name: 'Connect connected component with mergeProps',
  input,
  output
};

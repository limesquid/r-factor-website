const input = `import React from 'react';
import { connect } from 'react-redux';

const Button = () => (<span>Text</span>);

const mapDispatchToProps = {};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(null, mapDispatchToProps, mergeProps)(Button);
`;

const output = `import React from 'react';
import { connect } from 'react-redux';

const Button = () => (<span>Text</span>);

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(Button);
`;

export default {
  name: 'Disconnect component from mergeProps (example 3)',
  input,
  output
};

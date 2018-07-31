const input = `import React from 'react';
import { connect } from 'react-redux';

const Button = ({ name }) => (<span>{name}</span>);

const mapStateToProps = (state) => ({
  name: state.name
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(mapStateToProps, null, mergeProps)(Button);
`;

const output = `import React from 'react';
import { connect } from 'react-redux';

const Button = ({ name }) => (<span>{name}</span>);

const mapStateToProps = (state) => ({
  name: state.name
});

export default connect(mapStateToProps)(Button);
`;

export default {
  name: 'Disconnect component from mergeProps (example 2)',
  input,
  output
};

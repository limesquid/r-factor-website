const input = `import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ButtonComponent = ({ name }) => (<span>{name}</span>);

const mapStateToProps = (state) => ({
  name: state.name
});

export const Button = withAuth(connect(mapStateToProps)(ButtonComponent));
`;

const output = `import React from 'react';
import { withRouter } from 'react-router-dom';

const ButtonComponent = ({ name }) => (<span>{name}</span>);

export const Button = withAuth(ButtonComponent);
`;

export default {
  name: 'Disconnect component from mapStateToProps (example 3)',
  input,
  output
};

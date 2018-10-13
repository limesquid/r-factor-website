const input = `import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const ButtonComponent = ({ name }) => (<span>{name}</span>);

const mapStateToProps = (state) => ({
  name: state.name
});

const mapDispatchToProps = {

};

export const Button = withAuth(connect(mapStateToProps, mapDispatchToProps)(ButtonComponent));
`;

const output = `import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const ButtonComponent = ({ name }) => (<span>{name}</span>);

const mapStateToProps = (state) => ({
  name: state.name
});

export const Button = withAuth(connect(mapStateToProps)(ButtonComponent));
`;

export default {
  name: 'Disconnect component from mapDispatchToProps (example 2)',
  input,
  output
};

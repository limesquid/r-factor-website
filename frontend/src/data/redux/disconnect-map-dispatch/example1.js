const input = `import React from 'react';
import { connect } from 'react-redux';

const ButtonComponent = ({ name }) => (<span>{name}</span>);

const mapStateToProps = (state) => ({
  name: state.name
});

const mapDispatchToProps = {

};

export const Button = connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);
`;

const output = `import React from 'react';
import { connect } from 'react-redux';

const ButtonComponent = ({ name }) => (<span>{name}</span>);

const mapStateToProps = (state) => ({
  name: state.name
});

export const Button = connect(mapStateToProps)(ButtonComponent);
`;

export default {
  name: 'Disconnect component from mapDispatchToProps (example 1)',
  input,
  output
};

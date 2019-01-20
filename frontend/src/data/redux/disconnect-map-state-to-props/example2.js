const input = `import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
import { withRouter } from 'react-router-dom';

const ButtonComponent = ({ name }) => (<span>{name}</span>);

const mapDispatchToProps = {
  
};

export const Button = withAuth(connect(null, mapDispatchToProps)(ButtonComponent));
`;

export default {
  name: 'Disconnect component from mapStateToProps (example 2)',
  input,
  output
};

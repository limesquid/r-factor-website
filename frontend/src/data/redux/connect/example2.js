const input = `import React from 'react';
import { connect } from 'react-redux';

const ButtonComponent = (props) => (
  <div>Button</div>
);

const mapDispatchToProps = {

};

export const Button = connect(null, mapDispatchToProps)(ButtonComponent);
`;

const output = `import React from 'react';
import { connect } from 'react-redux';

const ButtonComponent = (props) => (
  <div>Button</div>
);

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export const Button = connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);
`;

export default {
  name: 'Connect connected component',
  input,
  output
};

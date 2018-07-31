const input = `import React from 'react';

export const Button = (props) => (
  <div>Button</div>
);
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
  name: 'Rename component according to the pattern while connecting it to the Redux store',
  input,
  output
};

const input = `import React from 'react';

export const Button = ({ value }) => (
  <button>{ value }</button>
);
`;

const output = `import React from 'react';
import { connect } from 'react-redux';

const ButtonComponent = ({ value }) => (
  <button>{value}</button>
);

const mapDispatchToProps = {
  
};

export const Button = connect(null, mapDispatchToProps)(ButtonComponent);
`;

export default {
  name: 'Connect disconnected component with mapDispatchToProps',
  input,
  output
};

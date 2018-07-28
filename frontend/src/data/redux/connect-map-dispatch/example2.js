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

const mapDispatchToProps = {
  
};

export const Button = connect(mapStateToProps, mapDispatchToProps)(ButtonComponent);
`;

export default {
  name: 'Connect already connected component with mapDispatchToProps',
  input,
  output
};

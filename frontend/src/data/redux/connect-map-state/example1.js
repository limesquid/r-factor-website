const input = `import React from 'react';

const Button = ({ value }) => (
  <div>{value}</div>
);

export default Button;
`;

const output = `import React from 'react';
import { connect } from 'react-redux';

const Button = ({ value }) => (
  <div>{value}</div>
);

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps)(Button);
`;

export default {
  name: 'Connect component with mapStateToProps',
  input,
  output
};

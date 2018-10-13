const input = `import React from 'react';
import { connect } from 'react-redux';

const ButtonComponent = () => (<span>Text</span>);

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(ButtonComponent);
`;

const output = `import React from 'react';

const ButtonComponent = () => (<span>Text</span>);

export default ButtonComponent;
`;

export default {
  name: 'Disconnect component from mapDispatchToProps (example 3)',
  input,
  output
};

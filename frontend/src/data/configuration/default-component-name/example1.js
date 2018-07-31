const input = `import React from 'react';

export default (props) => (
  <div>Button</div>
);
`;

const output = `import React from 'react';
import { connect } from 'react-redux';

const Component = (props) => (
  <div>Button</div>
);

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
`;

export default {
  name: 'Connect component',
  input,
  output
};

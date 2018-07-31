const input = `import React from 'react';

export default (hoc) => ({ prop }) => (
  <div>{hoc}Test{prop}</div>
);
`;

const output = `import React from 'react';
import { connect } from 'react-redux';

export default hoc => {
  const InnerComponent = ({ prop }) => (
    <div>{hoc}Test{prop}</div>
  );

  const mapStateToProps = (state) => ({
    
  });

  const mapDispatchToProps = {
    
  };

  return connect(mapStateToProps, mapDispatchToProps)(InnerComponent);
};
`;

export default {
  name: 'Connect HOC component',
  input,
  output
};

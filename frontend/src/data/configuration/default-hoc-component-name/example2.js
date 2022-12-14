const input = `import React from 'react';

export default (hoc) => ({ prop }) => (
  <div>{hoc}Test{prop}</div>
);
`;

const output = `import React from 'react';
import { withRouter } from 'react-router-dom';

export default (hoc) => {
  const InnerComponent = ({ prop }) => (
    <div>{hoc}Test{prop}</div>
  );

  return withRouter(InnerComponent);
};
`;

export default {
  name: 'Wrap HOC with withRouter',
  input,
  output
};

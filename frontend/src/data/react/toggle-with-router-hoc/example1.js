const input = `import React from 'react';

const Button = ({ children }) => (
  <div className="button">
    {children}
  </div>
);

export default Button;
`;

const output = `import React from 'react';
import { withRouter } from 'react-router';

const Button = ({ children }) => (
  <div className="button">
    {children}
  </div>
);

export default withRouter(Button);
`;

export default {
  name: 'Wraps component',
  input,
  output
};

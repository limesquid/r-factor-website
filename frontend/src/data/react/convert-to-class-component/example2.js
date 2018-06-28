const input = `import React from 'react';

const Button = () => (
  <div>Button</div>
);

export default Button;
`;

const output = `import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>Button</div>
    );
  }
}

export default Button;
`;

export default { input, output };

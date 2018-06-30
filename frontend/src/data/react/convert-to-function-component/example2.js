const input = `import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>Button</div>
    );
  }
}

export default Button;
`;

const output = `import React from 'react';

function Button() {
  return (
    <div>Button</div>
  );
}

export default Button;
`;

export default {
  name: 'Converts class component',
  input,
  output
};

const input = `import React from 'react';

function Button() {
  const x = 2;
  const y = 3;

  return (
    <div>
      {x * y}
    </div>
  );
}

export default Button;
`;

const output = `import React, { Component } from 'react';

class Button extends Component {
  render() {
    const x = 2;
    const y = 3;

    return (
      <div>
        {x * y}
      </div>
    );
  }
}

export default Button;
`;

export default {
  name: 'Converts function component',
  input,
  output
};

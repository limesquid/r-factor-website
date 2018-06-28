const input = `import React from 'react';

const Button = () => {
  const x = 2;
  const y = 3;

  return (
    <div>
      {x * y}
    </div>
  );
};

export default Button;
`;

const output = `import React from 'react';

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

export default { input, output };

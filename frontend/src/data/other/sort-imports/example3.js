const input = `import PropTypes from 'prop-types';
import _ from 'lodash';
import { render } from 'react-dom';
import React from 'react';
`;

const output = `import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
`;

export default {
  name: 'Sorts imports according to default configuration',
  input,
  output
};

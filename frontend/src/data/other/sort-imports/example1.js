const input = `import PropTypes from 'prop-types';
import { render } from 'react-dom';
import React from 'react';
import _ from 'lodash';
`;

const output = `import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { render } from 'react-dom';
`;

const config = `{
  "modules-order": "alphabetic"
}`;

export default {
  name: 'Sorts imports alphabetically',
  config,
  input,
  output
};

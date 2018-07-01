const input = `import React from 'react';
import PropTypes from 'prop-types';

import { selectText } from '../state/text';
import { load } from '../state/data';

import Modal from './Modal';
import Button from './Button';
`;

const output = `import PropTypes from 'prop-types';
import React from 'react';

import { load } from '../state/data';
import { selectText } from '../state/text';

import Button from './Button';
import Modal from './Modal';
`;

const config = `{
  "modules-order": "alphabetic"
}`;

export default {
  name: 'Sorts imports alphabetically in separate groups',
  config,
  input,
  output
};

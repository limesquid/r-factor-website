import React from 'react';
import PropTypes from 'prop-types';
import Media from 'reactstrap/lib/Media';
import Icon from '../../../components/icon';

const Feature = ({ name, description }) => (
  <Media className="my-2 p-2 py-3 align-items-center border-light">
    <Media className="px-4" left>
      <Icon bsStyle="success" name="check" style={{ fontSize: '2rem' }} />
    </Media>

    <Media body className="px-2">
      <Media heading>
        {name}
      </Media>
      {description}
    </Media>
  </Media>
);

Feature.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Feature;

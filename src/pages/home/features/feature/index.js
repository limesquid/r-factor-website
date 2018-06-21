import React from 'react';
import PropTypes from 'prop-types';
import Media from 'reactstrap/lib/Media';
import Icon from 'components/icon';

const Feature = ({ name, description }) => (
  <Media className="my-2 py-2 border-light">
    <Media className="px-2" left>
      <Icon bsStyle="success" name="check" style={{ fontSize: '1.4rem' }} />
    </Media>

    <Media body className="px-2">
      <Media heading className="text-info">
        {name}
      </Media>
      <div className="text-muted">
        {description}
      </div>
    </Media>
  </Media>
);

Feature.propTypes = {
  description: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};

export default Feature;

import React from 'react';
import PropTypes from 'prop-types';
import { allFeatures } from 'data';

const Feature = ({ match }) => {
  const feature = allFeatures.find(({ id }) => id === match.params.featureId);
  const { name, description } = feature;

  return (
    <div>
      <h1>{name}</h1>
      <p className="text-muted">{description}</p>
    </div>
  );
};

Feature.propTypes = {
  match: PropTypes.object.isRequired
};

export default Feature;

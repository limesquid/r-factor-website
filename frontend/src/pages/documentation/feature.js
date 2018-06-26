import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { allFeatures, configurationFeatures } from 'data';

const features = [ ...allFeatures, ...configurationFeatures ];

const Feature = ({ match }) => {
  const feature = features.find(({ id }) => id === match.params.featureId);

  if (!feature) {
    return (
      <Redirect to="/documentation" />
    );
  }

  const { name, summary } = feature;

  return (
    <div>
      <h1>{name}</h1>
      <p className="text-muted">{summary}</p>
    </div>
  );
};

Feature.propTypes = {
  match: PropTypes.object.isRequired
};

export default Feature;

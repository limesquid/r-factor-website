import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Feature from './feature';

const Features = ({ features }) => (
  <Fragment>
    {features.map((feature) => (<Feature key={feature.id} {...feature} />))}
  </Fragment>
);

Features.propTypes = {
  features: PropTypes.array.isRequired
};

export default Features;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import Example from './example';
import { allFeatures, configurationFeatures } from 'data';

const WORKS_WITH = {
  arrow: 'Functional component defined as an arrow function',
  class: 'Class component',
  function: 'Functional component defined as a function'
};

const features = [ ...allFeatures, ...configurationFeatures ];
const getConfigurationName = (id) => configurationFeatures.find(
  (feature) => feature.id === id
).name;

const Feature = ({ match }) => {
  const feature = features.find(({ id }) => id === match.params.featureId);

  if (!feature) {
    return (
      <Redirect to="/documentation" />
    );
  }

  const {
    actions,
    configuration,
    description,
    examples,
    dependencies,
    name: featureName,
    summary,
    worksWith
  } = feature;

  return (
    <Fragment>
      <Row className="mb-4">
        <Col>
          <h1>{featureName}</h1>
          <p className="text-muted">{summary}</p>
          {description && (
            <div className="text-muted">{description}</div>
          )}
        </Col>
      </Row>

      {actions && (
        <Row className="mb-4">
          <Col>
            <h3>How it works</h3>
            <div>
              {actions}
            </div>
          </Col>
        </Row>
      )}

      <Row className="mb-4">
        <Col>
          <h3>Works on</h3>
          <ul className="text-muted">
            {worksWith.map((componentType) => (
              <li key={componentType}>
                {WORKS_WITH[componentType]}
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        {dependencies && (
          <Col sm={6}>
            <h3>Packages</h3>
            <ul className="text-muted">
              {dependencies.map(({ name }) => (
                <li key={name}>
                  <code>{name}</code>
                </li>
              ))}
            </ul>
          </Col>
        )}

        <Col sm={6}>
          <h3>Configuration</h3>
          <ul className="text-muted">
            {configuration.map((id) => (
              <li key={id}>
                <LinkContainer to={`/documentation/${id}`}>
                  <a href={`/documentation/${id}`}>
                    {getConfigurationName(id)}
                  </a>
                </LinkContainer>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      {examples && examples.length > 0 && (
        <Fragment>
          <Row className="mb-2">
            <Col>
              <h3>Examples</h3>
            </Col>
          </Row>

          {examples.map((example, index) => (
            <Example key={index} {...example} index={index} />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

Feature.propTypes = {
  match: PropTypes.object.isRequired
};

export default Feature;

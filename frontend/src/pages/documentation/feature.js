import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import { Helmet } from 'react-helmet';
import Link from 'components/link';
import Example from './example';
import Setting from './setting';
import { allFeatures, configurationFeatures } from 'data';

const WORKS_WITH = {
  arrow: 'Functional components defined as an arrow function',
  class: 'Class components',
  function: 'Functional components defined as a function',
  'hoc-arrow': 'Higher order functional components defined as an arrow function',
  'hoc-class': 'Higher order class components',
  'hoc-function': 'Higher order functional components defined as a function',
  'import-statement': 'Import statements',
  'object-literal': 'Object literals'
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
    dependencies,
    description,
    examples,
    id,
    name: featureName,
    setting,
    summary,
    worksWith
  } = feature;

  return (
    <Fragment>
      <Helmet>
        <title>R-Factor - {featureName}</title>
      </Helmet>

      <Row className="mb-4">
        <Col>
          <h1>{featureName}</h1>
          <p className="text-muted">{summary}</p>
          {description && (
            <div className="text-muted">{description}</div>
          )}
        </Col>
      </Row>

      {setting && (
        <Setting id={id} setting={setting} />
      )}

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

      {worksWith && worksWith.length > 0 && (
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
      )}

      <Row className="mb-4">
        {configuration && configuration.length > 0 && (
          <Col sm={dependencies && dependencies.length > 0 ? 6 : 12}>
            <h3>Configuration</h3>
            <ul className="text-muted">
              {configuration.map((settingId) => (
                <li key={settingId}>
                  <Link href={`/documentation/${settingId}`} label={getConfigurationName(settingId)} />
                </li>
              ))}
            </ul>
          </Col>
        )}

        {dependencies && dependencies.length > 0 && (
          <Col sm={configuration && configuration.length > 0 ? 6 : 12}>
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
      </Row>

      {examples && examples.length > 0 && (
        <Row className="mb-2">
          <Col>
            <h3>Examples</h3>
            <ul className="text-muted">
              {examples.map((example, index) => (
                <Example key={index} {...example} index={index} />
              ))}
            </ul>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

Feature.propTypes = {
  match: PropTypes.object.isRequired
};

export default Feature;

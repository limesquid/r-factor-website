import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Code from 'components/code';
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
    actions, configuration, examples, dependencies, name: featureName, summary, worksWith
  } = feature;

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1>{featureName}</h1>
          <p className="text-muted">{summary}</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3>How it works</h3>
          <div className="text-muted">
            {actions}
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h3>Works with</h3>
          <ul className="text-muted">
            {worksWith.map((componentType) => (
              <li key={componentType}>
                {WORKS_WITH[componentType]}
              </li>
            ))}
          </ul>
        </Col>

        <Col lg={3}>
          <h3>Dependencies</h3>
          <ul className="text-muted">
            {dependencies.map(({ name, type }) => (
              <li key={name}>
                <code>{name}</code> - {type}
              </li>
            ))}
          </ul>
        </Col>

        <Col lg={3}>
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

      <Row className="mb-2">
        <Col>
          <h3>Examples</h3>
        </Col>
      </Row>

      {examples.map(({ input, output }, index) => (
        <Row key={index} className="mb-2">
          <Col lg={6}>
            <h4>#{index + 1} Input</h4>
            <Code disabled value={input} />
          </Col>

          <Col lg={6}>
            <h4>#{index + 1} Output</h4>
            <Code disabled value={output} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

Feature.propTypes = {
  match: PropTypes.object.isRequired
};

export default Feature;

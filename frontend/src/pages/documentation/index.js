import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import { Helmet } from 'react-helmet';
import DosAndDonts from './dos-and-donts';
import Feature from './feature';
import Installation from './installation';
import Navigation from './navigation';
import Quality from './quality';
import Usage from './usage';
import WhatIs from './what-is';
import {
  configurationFeatures,
  otherFeatures,
  reactFeatures,
  reduxFeatures
} from 'data';

const mapFeature = ({ id, name }) => ({ label: name, to: `/documentation/${id}` });

const rFactorDocs = [
  { label: 'What is R-Factor?', to: '/documentation/what-is-r-factor', Component: WhatIs },
  { label: 'Installation', to: '/documentation/installation', Component: Installation },
  { label: 'Usage', to: '/documentation/usage', Component: Usage },
  { label: 'Dos and don\'ts', to: '/documentation/dos-and-donts', Component: DosAndDonts },
  { label: 'Quality', to: '/documentation/quality', Component: Quality }
];

const docs = [
  { title: 'R-Factor', links: rFactorDocs },
  { title: 'React refactorings', links: reactFeatures.map(mapFeature) },
  { title: 'Redux refactorings', links: reduxFeatures.map(mapFeature) },
  { title: 'Other refactorings', links: otherFeatures.map(mapFeature) },
  { title: 'Configuration', links: configurationFeatures.map(mapFeature) }
];

const DocumentationPage = ({ location, match }) => {
  if (location.pathname === '/documentation') {
    return (
      <Redirect to={rFactorDocs[0].to} />
    );
  }

  return (
    <Row className="documentation-page">
      <Helmet>
        <title>R-Factor - Documentation</title>
      </Helmet>

      <Col md={4} className="mb-4">
        <Card>
          <CardBody>
            {docs.map(({ title, links }, index) => (
              <div key={index} className="mb-4">
                <h3>{index + 1}. {title}</h3>
                <Navigation links={links} />
              </div>
            ))}
          </CardBody>
        </Card>
      </Col>

      <Col md={8} className="mb-4">
        <Switch>
          {rFactorDocs.map(({ to, Component }) => (
            <Route key={to} exact path={to} component={Component} />
          ))}
          <Route path={`${match.url}/:featureId`} component={Feature} />
        </Switch>
      </Col>
    </Row>
  );
};

DocumentationPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export default DocumentationPage;

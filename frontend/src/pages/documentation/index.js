import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Feature from './feature';
import List from './list';
import PropTypes from 'prop-types';

const DocumentationPage = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}/`} component={List} />
    <Route path={`${match.url}/:featureId`} component={Feature} />
  </Switch>
);

DocumentationPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default DocumentationPage;

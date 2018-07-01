import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'reactstrap/lib/Button';
import routes from './routes';

const TypeChoice = () => (
  <Fragment>
    <h3>What would you like to do?</h3>
    {routes.map(({ color, label, to }) => (
      <LinkContainer key={to} to={to}>
        <Button className="mr-4" color={color}>
          {label}
        </Button>
      </LinkContainer>
    ))}
  </Fragment>
);

export default TypeChoice;

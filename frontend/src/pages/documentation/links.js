import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'reactstrap/lib/Button';

const Links = ({ className, features }) => (
  <div className={className}>
    {features.map(({ id, name }) => (
      <div key={id}>
        <LinkContainer to={`/documentation/${id}`}>
          <Button color="link">
            {name}
          </Button>
        </LinkContainer>
      </div>
    ))}
  </div>
);

Links.propTypes = {
  className: PropTypes.string,
  features: PropTypes.array.isRequired
};

export default Links;

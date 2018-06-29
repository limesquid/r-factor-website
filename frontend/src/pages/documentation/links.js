import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

const Links = ({ className, features }) => (
  <ul className={className}>
    {features.map(({ id, name }) => (
      <li key={id}>
        <LinkContainer to={`/documentation/${id}`}>
          <a href={`/documentation/${id}`}>
            {name}
          </a>
        </LinkContainer>
      </li>
    ))}
  </ul>
);

Links.propTypes = {
  className: PropTypes.string,
  features: PropTypes.array.isRequired
};

export default Links;

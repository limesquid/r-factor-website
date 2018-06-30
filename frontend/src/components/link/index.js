import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

const Link = ({ href, label }) => (
  <LinkContainer to={href}>
    <a href={href}>{label}</a>
  </LinkContainer>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Link;

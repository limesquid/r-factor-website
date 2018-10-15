import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { IndexLinkContainer } from 'react-router-bootstrap';
import './styles.css';

const Navigation = ({ links }) => (
  <ul className="documentation-navigation-list">
    {links.map(({ label, to }) => (
      <li key={to}>
        <IndexLinkContainer activeClassName="active" to={to}>
          <a className="text-muted" href={to}>
            {label}
          </a>
        </IndexLinkContainer>
      </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  })).isRequired
};

export default withRouter(Navigation);

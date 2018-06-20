import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'reactstrap/lib/Container';
import Nav from 'reactstrap/lib/Nav';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';

const links = [
  { label: 'Features', to: '/features' },
  { label: 'License', to: '/license' },
  { label: 'Submit Suggestion', to: '/suggestion' },
  { label: 'Buy Now!', to: '/purchase' }
];

const Navigation = ({ location }) => (
  <Navbar dark expand fixed="top" color="primary">
    <Container>
      <LinkContainer to="/">
        <NavbarBrand>
          R-Factor
        </NavbarBrand>
      </LinkContainer>

      <Nav navbar>
        {links.map(({ label, to }) => (
          <NavItem key={to} active={to === location.pathname}>
            <LinkContainer to={to}>
              <NavLink>
                {label}
              </NavLink>
            </LinkContainer>
          </NavItem>
        ))}
      </Nav>
    </Container>
  </Navbar>
);

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Navigation);

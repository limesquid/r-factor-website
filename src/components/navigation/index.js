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
import BuyButton from 'components/buy-button';
import { transparentLogoUrl } from 'data';

const links = [
  { label: 'Overview', to: '/' },
  { label: 'Try it', to: '/try' },
  { label: 'Documentation', to: '/documentation' },
  { label: 'Support', to: '/support' },
  { label: 'License', to: '/license' }
];

const Navigation = ({ location }) => (
  <Navbar dark expand fixed="top" color="primary">
    <Container>
      <LinkContainer to="/">
        <NavbarBrand className="d-flex align-items-center">
          <img height="32" src={transparentLogoUrl} alt="R-Factor" />
          <span className="pl-2">R-Factor</span>
        </NavbarBrand>
      </LinkContainer>

      <Nav navbar>
        {links.map(({ label, to }) => (
          <NavItem key={to} active={to === location.pathname} className="mx-2">
            <LinkContainer to={to}>
              <NavLink>
                {label}
              </NavLink>
            </LinkContainer>
          </NavItem>
        ))}

        <NavItem className="ml-2">
          <BuyButton />
        </NavItem>
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

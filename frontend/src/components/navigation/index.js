import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import Container from 'reactstrap/lib/Container';
import Nav from 'reactstrap/lib/Nav';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import BuyButton from 'components/buy-button';
import { transparentLogoUrl } from 'data';
import './styles.css';

const links = [
  { label: 'Overview', to: '/' },
  { label: 'Try it', to: '/try' },
  { label: 'Documentation', to: '/documentation' },
  { label: 'Support', to: '/support' },
  { label: 'License', to: '/license' }
];

const isActive = ({ location, to }) => {
  if (to === '/') {
    return to === location.pathname;
  }
  return location.pathname.startsWith(to);
};

const Navigation = ({ location }) => (
  <Navbar className="navigation" dark expand fixed="top" color="primary">
    <Container>
      <LinkContainer to="/">
        <NavbarBrand className="d-flex align-items-center">
          <img height="32" src={transparentLogoUrl} alt="R-Factor" />
          <span className="pl-2">R-Factor</span>
        </NavbarBrand>
      </LinkContainer>

      <Nav navbar>
        {links.map(({ label, to }, index) => (
          <NavItem key={index} active={isActive({ location, to })} className="mx-2">
            <IndexLinkContainer to={to}>
              <NavLink>
                {label}
              </NavLink>
            </IndexLinkContainer>
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

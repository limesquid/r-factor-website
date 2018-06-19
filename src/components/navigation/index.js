import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/es/Nav';
import Navbar from 'react-bootstrap/es/Navbar';
import NavItem from 'react-bootstrap/es/NavItem';

const links = [
  { label: 'Features', to: '/features' },
  { label: 'Issue', to: '/issue' },
  { label: 'License', to: '/license' },
  { label: 'Buy Now!', to: '/purchase' }
];

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <a href="#">R-Factor</a>
        </LinkContainer>
      </Navbar.Brand>
    </Navbar.Header>

    <Nav pullRight>
      {links.map(({ label, to }, index) => (
        <LinkContainer key={index} to={to}>
          <NavItem eventKey={index + 1}>
            {label}
          </NavItem>
        </LinkContainer>
      ))}
    </Nav>
  </Navbar>
);

export default Navigation;

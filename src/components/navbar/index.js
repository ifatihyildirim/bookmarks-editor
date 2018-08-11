import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => (
  <Nav vertical>
    <NavItem>
      <NavLink href="#">
        {'Link'}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">
        {'Link'}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">
        {'Another Link'}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">
        {'Disabled Link'}
      </NavLink>
    </NavItem>
  </Nav>
);

export default Navbar;

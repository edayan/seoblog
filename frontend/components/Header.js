import { useState } from 'react';
import { APP_NAME } from '../config';
import Link from 'next/link'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <Link href="/">
        <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
      </Link>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link href="/signup">
              <NavLink>Sign Up </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/signin">
              <NavLink>Sign In</NavLink>
            </Link>
          </NavItem>

        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
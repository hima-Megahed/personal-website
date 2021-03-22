import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CollapseStyled = styled(Collapse)`
  justify-content: flex-end;
`;

const NavItemStyled = styled(NavItem)`
  padding: 0 1vw 0 1vw;

  @media only screen and (max-width: 767px) {
    padding: 1vw 0 1vw 0;
  }
`;

const NavbarStyled = styled(Navbar)`
  background-color: white !important;
`;

const NavStyled = styled(Nav)`
  padding-right: 10vw;
`;

const NavigationBar: React.FC = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarStyled color="light" light expand="md">
      <NavbarToggler onClick={toggle} />
      <CollapseStyled isOpen={isOpen} navbar>
        <NavStyled className="me-auto" navbar>
          <NavItemStyled>
            <NavLink to="/hero">Hero</NavLink>
          </NavItemStyled>
          <NavItemStyled>
            <NavLink to="/about">About</NavLink>
          </NavItemStyled>
          <NavItemStyled>
            <NavLink to="/blogs">Blogs</NavLink>
          </NavItemStyled>
        </NavStyled>
      </CollapseStyled>
    </NavbarStyled>
  );
};

export default NavigationBar;

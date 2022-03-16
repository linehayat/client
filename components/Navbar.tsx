import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="md" fixed="top" className="text-uppercase justify-content-between header" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Navbar.Brand href="/">
        <img
            src="/lineHayatLogo.svg"
            width="50"
            height="50"
            className="d-inline-block align-top lHLogoHeader"
        />
      </Navbar.Brand>
      <NavbarToggle aria-controls="basic-navbar-nav"/>
      <NavbarCollapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto" onSelect={() => setExpanded(!expanded)}>
          <NavDropdown className="nav-title" title="Who we are" id="basic-nav-dropdown">
            <NavDropdown.Item href='/#aboutus'>About us</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="nav-title" title="Reach us" id="basic-nav-dropdown">
            <NavDropdown.Item href="/chat">Chat</NavDropdown.Item>
            <NavDropdown.Item href="/privacy">Privacy policy</NavDropdown.Item>
          </NavDropdown>

          <NavLink className="nav-title" href="/faq">FAQ</NavLink>

          <NavDropdown className="nav-title" title="Our Contacts" id="basic-nav-dropdown">
            <NavDropdown.Item href='/#contact'>Contact us</NavDropdown.Item>
            <NavDropdown.Item href="https://docs.google.com/forms/d/e/1FAIpQLSddwiLsi33C9DVywdAixOk2s7laSc91M7WXfpjYH2cLZtju2w/viewform">Feedback</NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
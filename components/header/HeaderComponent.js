import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavLink from 'react-bootstrap/NavLink';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import 'flag-icon-css/css/flag-icon.css';
import './HeaderComponent.css';
import { LanguageContext } from '../../App';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import logo from '../../public/lineHayatLogo.svg';

function HeaderComponent(props) {
  const languageContext = useContext(LanguageContext);
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Navbar
        expand="md"
        fixed="top"
        className="text-uppercase justify-content-between header"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Navbar.Brand href="/#">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top lHLogoHeader"
          />
        </Navbar.Brand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="mr-auto" onSelect={() => setExpanded(!expanded)}>
            <NavDropdown
              className="nav-title"
              title={languageContext.content.header.whoWeAre}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/#aboutus">About us</NavDropdown.Item>
              <NavDropdown.Item href="/#team">
                {languageContext.content.header.team}
              </NavDropdown.Item>
              <NavDropdown.Item href="/#team">
                {languageContext.content.header.hebatAgenda}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="nav-title"
              title={languageContext.content.header.helped}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#/help">
                {languageContext.content.header.chat}
              </NavDropdown.Item>
              <NavDropdown.Item href="#/help">
                {languageContext.content.header.call}
              </NavDropdown.Item>
              <NavDropdown.Item href="#/privacy">
                {languageContext.content.header.privacy}
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink className="nav-title" href="#/volunteer">
              {languageContext.content.header.volunteer}
            </NavLink>
            <NavLink className="nav-title" href="#/action/3.2">
              {languageContext.content.header.support}
            </NavLink>
            <NavLink className="nav-title" href="#/resources">
              {languageContext.content.header.resources}
            </NavLink>
            <NavLink className="nav-title" href="/#faq">
              FAQ
            </NavLink>

            <NavDropdown
              className="nav-title"
              title="Our Contacts"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/#contact">
                {languageContext.content.header.getConnected}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://docs.google.com/forms/d/1sS2esF4vrfVe9bhoo0TBOn4rrPTSpCGnwfbSiKOZINY/viewform?edit_requested=true"
              >
                {languageContext.content.header.feedback}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="horizontalCenter-sm">
            <Form inline>
              <Dropdown
                className="flagDropdown"
                onSelect={() => {
                  props.updateLanguage();
                  setExpanded(!expanded);
                }}
              >
                <Dropdown.Toggle id="dropdown-basic" className="p-1">
                  {languageContext.language == 'my' && (
                    <span className="flag-icon-my flag-icon flag mr-1" />
                  )}
                  {languageContext.language == 'en' && (
                    <span className="flag-icon-gb flag-icon flag mr-1" />
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu className="flag-dropdown-menu">
                  {languageContext.language == 'my' && (
                    <Dropdown.Item>
                      <div className="flag-icon-gb flag-icon flag" />
                    </Dropdown.Item>
                  )}
                  {languageContext.language == 'en' && (
                    <Dropdown.Item>
                      <div className="flag-icon-my flag-icon flag" />
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </div>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <header>
      <Navbar fixed="top"  bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className='logoHeader' src="https://cdn.freebiesupply.com/logos/large/2x/razer-logo-png-transparent.png" alt="razerlogo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mouse</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mouse Mats
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Keyboards</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Headsets
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#cart"> <CartWidget/> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default NavBar
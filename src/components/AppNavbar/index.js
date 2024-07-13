import React, { useState } from 'react';
import { Navbar, Nav, Button, NavDropdown, Offcanvas, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

const AppNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="sm" className="app-navbar">
        <Container>
          <Navbar.Brand href="">
            <Link to="/"><img src="https://accredian.com/Rcimages/logo.png" className='navbar-img-logo' alt="Logo" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Product Management</NavDropdown.Item>
                <NavDropdown.Item href="">Strategy & Leadership</NavDropdown.Item>
                <NavDropdown.Item href="">Business Management</NavDropdown.Item>
                <NavDropdown.Item href="">Fintech</NavDropdown.Item>
                <NavDropdown.Item href="">Senior Management</NavDropdown.Item>
                <NavDropdown.Item href="">Project Management</NavDropdown.Item>
                <NavDropdown.Item href="">Digital Transformation</NavDropdown.Item>
                <NavDropdown.Item href="">Data Science</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="https://accredian.com/" className='d-none d-lg-block' target='_blank'>Resources</Nav.Link>
              <Nav.Link href="https://accredian.com/Career" className='d-none d-lg-block' target='_blank'>About Us</Nav.Link>
              <Link to="/login" className="me-2">
                <Button variant="outline-primary">Login</Button>
              </Link>
              <Button variant="primary">Try for Free</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavDropdown title="Courses" id="offcanvas-nav-dropdown">
              <NavDropdown.Item href="">Product Management</NavDropdown.Item>
              <NavDropdown.Item href="">Strategy & Leadership</NavDropdown.Item>
              <NavDropdown.Item href="">Business Management</NavDropdown.Item>
              <NavDropdown.Item href="">Fintech</NavDropdown.Item>
              <NavDropdown.Item href="">Senior Management</NavDropdown.Item>
              <NavDropdown.Item href="">Project Management</NavDropdown.Item>
              <NavDropdown.Item href="">Digital Transformation</NavDropdown.Item>
              <NavDropdown.Item href="">Data Science</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://accredian.com/" target='_blank'>Resources</Nav.Link>
            <Nav.Link href="https://accredian.com/Career" target='_blank'>About Us</Nav.Link>
            <Link to="/login" className="mt-2">
              <Button variant="outline-primary">Login</Button>
            </Link>
            <Button variant="primary" className="mt-2">Try for Free</Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AppNavbar;
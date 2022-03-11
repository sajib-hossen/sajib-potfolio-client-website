import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Sajib___Hossen</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Services</Nav.Link>
              <Nav.Link href="#features">Blogs</Nav.Link>
              <Nav.Link href="#pricing">Project</Nav.Link>
              <Nav.Link href="#features">Skill</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <Button variant="primary">Resume</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

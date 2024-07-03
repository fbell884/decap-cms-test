"use client";
import Link from "next/link";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar expand="lg" className="whiteBg">
      <Container>
        <Navbar.Brand href="/" className="turquoiseText fw-bold">
          POC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="" disabled>
              Coming Soon
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

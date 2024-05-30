import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoBagOutline } from "react-icons/io5";

const Naav = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Navbar className="navbar" expand="lg" bg="">
      <Container>
        <Navbar.Brand href="#home" as={Link} to="/" className="text-white fw-bold">
          Redux-Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto me-lg-0 ms-lg-auto">
            <Nav.Link as={Link} to="/" href="#home" className="text-white fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              href="#about"
              className="text-white fw-semibold"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cart"
              href="#cart"
              className="cart-icon text-white fw-semibold" 
            >
              <IoBagOutline className="fs-4 text-white" />
              <span className="bag">
                <h6>{cartItems.length}</h6>
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Naav;

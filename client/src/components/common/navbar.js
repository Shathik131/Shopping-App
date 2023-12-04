import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const navbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' className='bg-body-dark'>
        <Container>
          <span>
            <img
              src='/fruit_image/fruits store.jpg'
              className=' rounded-5'
              width={50}
            />
          </span>

          <Navbar.Brand href='#home' className="nav_text px-2 fs-4">DRESS-STORE</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className=" mx-auto fs-5 ">
            <Nav.Link href="/" className="nav_text">
              HOME
            </Nav.Link>
            <Nav.Link href="/product" className="nav_text">
              PRODUCT
            </Nav.Link>
            <Nav.Link href="/about" className="nav_text">
              ABOUT US
            </Nav.Link>
            <Nav.Link href="/contact" className="nav_text">
              CONTACT
            </Nav.Link>
          </Nav> 

          <Nav>
          ABOUT US
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar =() => {

    return (
        <>
    
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Theroy">Small topics</Nav.Link>
            <Nav.Link href="/com">Compiler</Nav.Link>
            <Nav.Link href="/topic">Topics</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


     
  
        </>
    );
}

export default NavBar;
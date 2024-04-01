import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavbarComponent({setCategory}) {
  return (
    <Navbar expand="lg" bg="light" variant="">
      <Navbar.Brand href="#"><span className='badge bg-light text-dark fs-4'> NewsWorld </span></Navbar.Brand>

        <Nav className="mr-auto">
        
          <Nav.Link  className="nav-link" onClick={()=> setCategory("technology")}>Technology</Nav.Link>
          
          <Nav.Link  className="nav-link" onClick={()=> setCategory("business")}>Business</Nav.Link>
         
          <Nav.Link  className="nav-link" onClick={()=> setCategory("health")}>Health</Nav.Link>
         
          <Nav.Link  className="nav-link" onClick={()=> setCategory("sports")}>Sports</Nav.Link>
         
          <Nav.Link  className="nav-link" onClick={()=> setCategory("entertainment")}>Entertainment</Nav.Link>
         

          
        </Nav>
    </Navbar>
  );
}

export default NavbarComponent;

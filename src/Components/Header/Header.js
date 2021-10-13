import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap';

//this function will return render the navigation items to the web page , it receives pros
export const Header =()=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Features</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    )
}
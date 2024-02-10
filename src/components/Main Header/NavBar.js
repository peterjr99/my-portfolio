import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { Button } from 'react-bootstrap';




function NavBar() {

    

        
  return (
    <Navbar expand="lg" id='navbar'   >
      <Container>
        <Navbar.Brand className='nav-brand' href="#home" >Peter Tayong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className=" ms-auto " >
            <Nav.Link className='nav-link home' href="#about">About</Nav.Link>
            <Nav.Link  className='nav-link about' href="#skill">Skills</Nav.Link>
            <Nav.Link  className='nav-link project' href="#project">Projects</Nav.Link>
            <Nav.Link  className='nav-link contact' href="#contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
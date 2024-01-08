import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PiPopcornBold } from "react-icons/pi";
import "../styles/NavbarPage.css"

const navbarPage = () => {
  return(
    <div className='navbarPage'>
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='homeNavbar'><PiPopcornBold className='iconPopCornNavbar'/>FilmApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#films">Films</Nav.Link>
            <Nav.Link href="#series">Series</Nav.Link>
            <Nav.Link href="#trendings">Trending</Nav.Link>
            <Nav.Link href="#genders">Genders</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbarPage;
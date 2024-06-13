import { Link } from 'react-router-dom';
import './Navbar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Navbars = () => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Navbar.Brand >
            <Link to={"/"}>Logo </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <Link to={"/"}>Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Navbars;
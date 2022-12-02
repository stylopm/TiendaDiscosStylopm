import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
        <Navbar bg="dark" variant='dark'>
          <Container>
            <Navbar.Brand href="/"> *** ---  Tienda de discos STYLOPM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="contacto">Contacto</Nav.Link>
                <Nav.Link href="direccion">Dirección</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default Header;
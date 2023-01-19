import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../components/styles/NavBar.css";

export const NavBar = () => {
  return (
    <Navbar className="nav-bar" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Red Metropolitana</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white">
              <Link to="/servicios">Sevicios</Link>
            </Nav.Link>
            <Nav.Link className="text-white">
              <Link to="/productos">Productos</Link>
            </Nav.Link>
            <Nav.Link className="text-white">
              <Link to="/nosotros">Nosotros</Link>
            </Nav.Link>
            <Nav.Link className="text-white">
              <Link to="/contacto">Contacto</Link>
            </Nav.Link>
            <Nav.Link
              href="https://redmetropolitana.autogestion.io/"
              className="text-white"
            >
              Autogestion
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-white">
              <Link to='/login'>Iniciar sesion</Link>
            </Nav.Link>
            <Nav.Link className="text-white">
              <Link to='/signup'>Registrarse</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../components/styles/NavBar.css";
import { CartWidget } from "./CartWidget";
import { UserView } from "./UserView";

export const NavBar = () => {
  const { isLoggedIn } = useContext(authContext);

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
              <Link to="/productos">Tienda</Link>
            </Nav.Link>
            <Nav.Link className="text-white">
              <Link to="/nosotros">Nosotros</Link>
            </Nav.Link>
            <Nav.Link className="text-white">
              <Link to="/contacto">Contacto</Link>
            </Nav.Link>
            {isLoggedIn ? (
              <Nav.Link
                href="https://redmetropolitana.autogestion.io/"
                className="text-white"
              >
                Autogestion
              </Nav.Link>
            ) : (
              <Nav.Link className="text-white">
                <Link to='/FAQ'>Preguntas frecuentes</Link>
              </Nav.Link>
            )}
          </Nav>
          <Nav className="align-items-center">
            {!isLoggedIn ? (
              <>
                <Nav.Link className="text-white">
                  <Link to="/login">Iniciar sesion</Link>
                </Nav.Link>
                <Nav.Link className="text-white">
                  <Link to="/signup">Registrarse</Link>
                </Nav.Link>
              </>
            ) : (
              <>
                <CartWidget />
                <UserView />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

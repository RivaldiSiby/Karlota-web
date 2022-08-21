import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
// img
import logo1 from "../../assets/img/logo/logo1.jpg";

function NavbarMenu() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar className="p-5 navbar-main" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-logo" href="#home">
            <img src={logo1} alt="logo1" />
          </Navbar.Brand>
          <Navbar.Collapse className="navbar-menubar" id="basic-navbar-nav">
            <Nav className="d-flex justify-content-end align-items-center w-100">
              <Nav.Link className="nav-menu-list " href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-menu-list" href="#link">
                Download
              </Nav.Link>
              <Nav.Link
                className="nav-menu-list btn-navbar btn-left"
                onClick={() => navigate("/login")}
              >
                Login
              </Nav.Link>
              <Nav.Link
                className="nav-menu-list btn-navbar btn-right"
                onClick={() => navigate("/register")}
              >
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarMenu;

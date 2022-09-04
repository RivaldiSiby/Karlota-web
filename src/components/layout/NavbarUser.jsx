import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
// icon
import {
  AiFillHome,
  AiFillWechat,
  AiOutlineContacts,
  AiOutlineUser,
} from "react-icons/ai";

// img
import logo1 from "../../assets/img/logo/logo1.jpg";

function NavbarUser() {
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
              <Nav.Link className="nav-menu-list pe-2" href="#home">
                <AiFillHome className="me-2" />
                Home
              </Nav.Link>
              <Nav.Link className="nav-menu-list pe-2" href="#link">
                <AiFillWechat className="me-2" />
                Chat
              </Nav.Link>
              <Nav.Link className="nav-menu-list pe-2" href="#link">
                <AiOutlineContacts className="me-2" />
                Contact
              </Nav.Link>
              <Nav.Link className="nav-menu-list pe-2" href="#link">
                <AiOutlineUser className="me-2" />
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarUser;

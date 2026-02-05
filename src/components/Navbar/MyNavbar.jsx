import {  NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
    return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><b>PeTIK-Blog</b></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Item>
              <NavLink to="/" className="nav-link">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/posts" className="nav-link">Posts</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/about" className="nav-link">About</NavLink>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    )
  }
  
  export default MyNavbar;
  
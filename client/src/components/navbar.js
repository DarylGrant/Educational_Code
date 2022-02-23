import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Web Development Basics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="HTML" id="html-nav-dropdown">
              <NavDropdown.Item href="/info/html">Description</NavDropdown.Item>
              <NavDropdown.Item href="/test/htmlbasics">
                HTML Basics Quiz
              </NavDropdown.Item>
              <NavDropdown.Item href="/test/htmlintermediate">
                HTML Intermediate Quiz
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ask a HTML Question
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="CSS" id="css-nav-dropdown">
              <NavDropdown.Item href="/info/css">Description</NavDropdown.Item>
              <NavDropdown.Item href="/test/cssbasics">
                CSS Basics Quiz
              </NavDropdown.Item>
              <NavDropdown.Item href="/test/cssintermediate">
                CSS Intermediate Quiz
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ask a CSS Question
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Javascript" id="js-nav-dropdown">
              <NavDropdown.Item href="/info/js">Description</NavDropdown.Item>
              <NavDropdown.Item href="/test/jsbasics">
                Javascript Basics Quiz
              </NavDropdown.Item>
              <NavDropdown.Item href="/test/jsintermediate">
                Javascript Intermediate Quiz
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ask a JS Question
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;

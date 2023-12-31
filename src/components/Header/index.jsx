import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./main.css";

function Header() {
  return (
    <Navbar expand="lg" className="tertiary">
      <Container className="nav">
        <Navbar.Brand href="#">
          <img src="https://static.wixstatic.com/media/bc139a_2e4e3dbd85354ecd837e8ce8e7c9859f~mv2.png/v1/crop/x_80,y_54,w_1608,h_616/fill/w_241,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Mane%20Logo%20-%20FULL%20COLOUR-01.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto  my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

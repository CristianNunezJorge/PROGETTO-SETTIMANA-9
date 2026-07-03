import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-black" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#" className="text-danger fw-bold" >NETFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">Home</Nav.Link> 
            <Nav.Link href="#">TV Shows</Nav.Link>  
            <Nav.Link href="#">Movies</Nav.Link> 
            <Nav.Link href="#">Recently Added</Nav.Link> 
            <Nav.Link href="#">My List</Nav.Link> 
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "./MyNav.css";

const MyNav = ({ query, setQuery }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mynav-navbar">
      <Navbar.Brand href="/" className="mynav-brand">
        EpicBooks
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className="mynav-link">
            Home
          </Nav.Link>
          <Nav.Link href="/about" className="mynav-link">
            About
          </Nav.Link>
          <Nav.Link href="/browse" className="mynav-link">
            Browse
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Cerca qui..."
            className="mynav-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;

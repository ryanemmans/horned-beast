import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header(props) {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <h1>{props.title} 🦄</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;

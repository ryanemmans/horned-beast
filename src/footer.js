import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Footer(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <h3>{props.author}</h3>
        </Navbar.Brand>
      </Container>
    </Navbar>


  );
}

export default Footer;

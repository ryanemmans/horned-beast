import Container from 'react-bootstrap/Container';

function Header(props) {
  return (
    <Container>
      <h1>{props.title}</h1>
    </Container>
  );
}

export default Header;

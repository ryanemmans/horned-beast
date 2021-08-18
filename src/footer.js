import Container from 'react-bootstrap/Container';

function Footer(props) {
  return (
    <Container>
      <h3>{props.author}</h3>
    </Container>
  );
}

export default Footer;

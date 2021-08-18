import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import HornedBeast from './hornedBeast';

class Main extends Component {
  render() {
    return (
      <Container>
        <h2>{this.props.message}</h2>
        <HornedBeast />
      </Container>
    );
  }
}

export default Main;

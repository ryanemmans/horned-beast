import { Component } from 'react';
// import './App.css';
import beastImages from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class HornedBeast extends Component {
  /*
    Print out index 0 - 4
    Print out index 5 - 9
  */
  render() {
    return (
      <Container>
        <BeastRow startIndex={0} />
        <BeastRow startIndex={5} />
        <BeastRow startIndex={10} />
        <BeastRow startIndex={15} />
      </Container >
    );
  }
}

class BeastRow extends Component {
  render() {
    return (
      <Row>
        <BeastCol index={this.props.startIndex} />
        <BeastCol index={this.props.startIndex + 1} />
        <BeastCol index={this.props.startIndex + 2} />
        <BeastCol index={this.props.startIndex + 3} />
        <BeastCol index={this.props.startIndex + 4} />
      </Row >
    );
  }
}

class BeastCol extends Component {
  render() {
    return (
      <Col>
        <BeastImage image_url={beastImages[this.props.index].image_url} title={beastImages[this.props.index].title} description={beastImages[this.props.index].description} />
      </Col>
    );
  }
}

class BeastImage extends Component {
  constructor(props) {
    super(props);
    this.state = { // JavaScript object
      likes: 0
    };
  }

  handleClick = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount
    });
  };

  render() {
    return (
      <div onClick={this.handleClick} id={this.props.itemId} likes={this.state.likes}>
        <Image src={this.props.image_url} alt="horned beast" rounded fluid />
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <h4>❤️{this.state.likes}</h4>
      </div>
    );
  }
}

export default HornedBeast;

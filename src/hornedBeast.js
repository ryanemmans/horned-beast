import { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class HornedBeast extends Component {
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
      <Card
        onClick={this.handleClick}
        likes={this.state.likes}>
        <Card.Img variant="top" src={this.props.image_url} alt="horned beast" rounded fluid />
        <Card.Body>
          <Card.Text>&#9829;{this.state.likes}</Card.Text>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

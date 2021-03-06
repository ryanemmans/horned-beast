import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { // JavaScript object
    //   likes: 0
    // };
  }

  handleClick = () => {
    let newCount = this.props.likes + 1;
    this.props.addLike(newCount, this.props.title);
  };

  enlarge = () => {
    this.props.enlarge({
      image_url: this.props.image_url,
      title: this.props.title,
      description: this.props.description,
      horns: this.props.horns,
    });
  }

  render() {
    return (
      <Card>
        <Card.Img
          onClick={this.enlarge}
          variant="top"
          src={this.props.image_url}
          alt="horned beast"
          rounded="true"
          fluid="true"
          style={{ cursor: 'pointer' }} />
        <Card.Body>
          {this.props.hideLikes ? null :
            <Card.Text
              onClick={this.handleClick}
              likes={this.props.likes}>
              <Button variant="outline-danger">&#9829; {this.props.likes}</Button></Card.Text>}
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <p>{this.props.description}</p>
            <p>Horns: {this.props.horns}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

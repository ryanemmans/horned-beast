import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // JavaScript object
      likes: 0
    };
  }

  // enlarge = () => {
  //   this.setState({
  //   });

  //   if (this.props.image_url === clicked) {
  //     this.props.onEnlarge();
  //   }
  // }

  handleClick = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount
    });
  };

  render() {
    // const [modalShow, setModalShow] = React.useState(false);

    return (
      <Card>
        <Card.Img variant="top" src={this.props.image_url} alt="horned beast" rounded fluid />
        {/* <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
        <Card.Body>
          <Card.Text onClick={this.handleClick}
            likes={this.state.likes}>
            <Button variant="outline-danger"><h3>&#9829;{this.state.likes}</h3></Button></Card.Text>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

// onClick={() => setModalShow(true)} 

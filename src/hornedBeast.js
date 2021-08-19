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

  enlarge = () => {
    // console.log(e);
    this.props.onEnlarge(this.props);
    alert(this.props.title);
    //   this.setState({
    //   });

    //   if (this.props.image_url === clicked) {
    //   }
  }

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
        <Card.Img onClick={this.enlarge} variant="top" src={this.props.image_url} alt="horned beast" rounded="true" fluid="true" />
        {/* <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
        <Card.Body>
          <Card.Text onClick={this.handleClick}
            likes={this.state.likes}>
            <Button variant="outline-danger">&#9829; {this.state.likes}</Button></Card.Text>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

// onClick={() => setModalShow(true)}

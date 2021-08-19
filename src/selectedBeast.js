import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import HornedBeast from './hornedBeast';


export default class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title title={this.props.title}>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HornedBeast
            image_url={this.props.image_url}
            // onClick={this.handleClick}
            // likes={this.state.likes}>
            // <Button variant="outline-danger"><h3>&#9829;{this.state.likes}</h3></Button>
            description={this.props.description}
          // key={i}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}



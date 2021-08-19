import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import HornedBeast from './hornedBeast';


export default class SelectedBeast extends React.Component {
  render() {
    console.log(this.props.display);
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <h2>{this.props.display.title}</h2>
        </Modal.Header>
        <Modal.Body>
          <HornedBeast
            image_url={this.props.display.image_url}
            description={this.props.display.description}
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

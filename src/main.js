import { Component } from 'react';
import beastImages from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Main extends Component {
  render() {
    return (
      <Container>
        <h1>Message here: {this.props.message}</h1>
        <Row>
          <Col>
            <BeastImage image_url={beastImages[0].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[1].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[2].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[3].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[4].image_url} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BeastImage image_url={beastImages[5].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[6].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[7].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[8].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[9].image_url} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BeastImage image_url={beastImages[10].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[11].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[12].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[13].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[14].image_url} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BeastImage image_url={beastImages[15].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[16].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[17].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[18].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={beastImages[19].image_url} />
          </Col>
        </Row>
      </Container>
    );
  }
}

class BeastImage extends Component {
  constructor(props) {
    super(props);
    this.state = { // JavaScript object
      'status': 'Yay'
    };
  }

  handleClick = () => {
    const newStatus = this.state.status === 'Nay' ? 'Yay' : 'Nay';
    this.setState({
      status: newStatus
    });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <Image src={this.props.image_url} alt="horned beast" rounded fluid />
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default Main;

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
        <h2>{this.props.message}</h2>
        <Row>
          <Col>
            <BeastImage title={beastImages[0].title} image_url={beastImages[0].image_url} description={beastImages[0].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[1].title} image_url={beastImages[1].image_url} description={beastImages[1].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[2].title} image_url={beastImages[2].image_url} description={beastImages[2].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[3].title} image_url={beastImages[3].image_url} description={beastImages[3].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[4].title} image_url={beastImages[4].image_url} description={beastImages[4].description} />          </Col>
        </Row>
        <Row>
          <Col>
            <BeastImage title={beastImages[5].title} image_url={beastImages[5].image_url} description={beastImages[5].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[6].title} image_url={beastImages[6].image_url} description={beastImages[6].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[7].title} image_url={beastImages[7].image_url} description={beastImages[7].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[8].title} image_url={beastImages[8].image_url} description={beastImages[8].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[9].title} image_url={beastImages[9].image_url} description={beastImages[9].description} />          </Col>
        </Row>
        <Row>
          <Col>
            <BeastImage title={beastImages[10].title} image_url={beastImages[10].image_url} description={beastImages[10].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[11].title} image_url={beastImages[11].image_url} description={beastImages[11].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[12].title} image_url={beastImages[12].image_url} description={beastImages[12].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[13].title} image_url={beastImages[13].image_url} description={beastImages[13].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[14].title} image_url={beastImages[14].image_url} description={beastImages[14].description} />          </Col>
        </Row>
        <Row>
          <Col>
            <BeastImage title={beastImages[15].title} image_url={beastImages[15].image_url} description={beastImages[15].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[16].title} image_url={beastImages[16].image_url} description={beastImages[16].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[17].title} image_url={beastImages[17].image_url} description={beastImages[17].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[18].title} image_url={beastImages[18].image_url} description={beastImages[18].description} />          </Col>
          <Col>
            <BeastImage title={beastImages[19].title} image_url={beastImages[19].image_url} description={beastImages[19].description} />
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
      'status': 'Yes!'
    };
  }

  handleClick = () => {
    const newStatus = this.state.status === 'No!' ? 'Yes!' : 'No!';
    this.setState({
      status: newStatus
    });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h4>{this.props.title}</h4>
        <Image src={this.props.image_url} alt="horned beast" rounded fluid />
        <p>{this.props.description}</p>
        <h4>{this.state.status}</h4>
      </div>
    );
  }
}

export default Main;

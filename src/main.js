import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeast from './hornedBeast';
// import Data from './data.json';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <h3>{this.props.message}</h3>
        <Row xs={1} md={2} lg={4} xl={6} xxl={8} className="">
          {this.props.beastImages.map((beast, i) => (
            <Col>
              <HornedBeast
                image_url={beast.image_url}
                title={beast.title}
                description={beast.description}
                key={i}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

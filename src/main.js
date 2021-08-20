import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeast from './hornedBeast';

export default class Main extends React.Component {

  handleChange = (event) => {
    const selection = parseInt(event.target.value);
    this.props.filterHorns(selection);
  };

  render() {
    return (
      <Container>
        <h3>{this.props.message}</h3>

        <Row xs={1} md={2} lg={4} xl={4} xxl={4} style={{ marginBottom: '10px' }}>
          <Col>
            <Form>
              <Form.Select
                onChange={this.handleChange}
                aria-label="Default select example">
                <option>(Filter By Horns)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">More Than Three Horns ???</option>
              </Form.Select>
            </Form>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={4} xl={6} xxl={8}>
          {this.props.beastImages.map((beast, i) => (
            <Col>
              <HornedBeast
                key={i}
                image_url={beast.image_url}
                title={beast.title}
                description={beast.description}
                keyword={beast.keyword}
                horns={beast.horns}
                selectedbeast={this.props.selectedBeast}
                enlarge={this.props.onEnlarge}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

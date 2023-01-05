import React, { Component } from "react";
import { Button, Card, CardGroup, Container, Row, Col } from "react-bootstrap";
import CarouselBox from "../Components/CarouselBox";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox></CarouselBox>
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardGroup className="m-4">
            <Row xs={1} lg={3} md={2} className="g-4">
              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae iure tempora quasi!
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae iure tempora quasi!
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                  </Card.Body>
                  <Card.Img
                    variant="bottom"
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </Card>
              </Col>

              <Col>
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Card.Body>
                    <Card.Title>Developers</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae iure tempora quasi!
                    </Card.Text>
                    <Button variant="primary">About team</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        </Container>
      </>
    );
  }
}

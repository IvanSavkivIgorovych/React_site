import React, { Component } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={9}>
            <Card style={{ flexDirection: "row" }} className="m-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                width={150}
                height={150}
                className="me-3"
                alt="JS"
              />
              <Card.Body>
                <Card.Title>Blog post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto velit assumenda? Quaerat neque quae
                  voluptatum totam et voluptatem iste officia corporis vel
                  necessitatibus quasi, repudiandae aliquam inventore numquam
                  repellat.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ flexDirection: "row" }} className="m-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                width={150}
                height={150}
                className="me-3"
                alt="JS"
              />
              <Card.Body>
                <Card.Title>Blog post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto velit assumenda? Quaerat neque quae
                  voluptatum totam et voluptatem iste officia corporis vel
                  necessitatibus quasi, repudiandae aliquam inventore numquam
                  repellat.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ flexDirection: "row" }} className="m-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                width={150}
                height={150}
                className="me-3"
                alt="JS"
              />
              <Card.Body>
                <Card.Title>Blog post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto velit assumenda? Quaerat neque quae
                  voluptatum totam et voluptatem iste officia corporis vel
                  necessitatibus quasi, repudiandae aliquam inventore numquam
                  repellat.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ flexDirection: "row" }} className="m-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                width={150}
                height={150}
                className="me-3"
                alt="JS"
              />
              <Card.Body>
                <Card.Title>Blog post</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet architecto velit assumenda? Quaerat neque quae
                  voluptatum totam et voluptatem iste officia corporis vel
                  necessitatibus quasi, repudiandae aliquam inventore numquam
                  repellat.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Eveniet architecto velit assumenda? Quaerat neque quae
                  voluptatum totam et voluptatem iste officia corporis vel
                  necessitatibus quasi, repudiandae aliquam inventore numquam
                  repellat.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

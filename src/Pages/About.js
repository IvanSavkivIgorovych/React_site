import React, { Component } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm="3">
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm="9">
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    src="https://cdn.dribbble.com/users/372375/screenshots/7512000/figma_web_design_kit_-_landing_page_templates_2x.png"
                    alt="Design"
                    className="img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam ut amet saepe deleniti eligendi doloremque officiis
                    consequatur magnam eos mollitia, obcaecati ipsa. Incidunt,
                    dolore quibusdam?
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <img
                    src="https://www.rswebsols.com/wp-content/uploads/2021/08/software-developers-team-building-business-coworkers.jpg"
                    alt="Team"
                    className="img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam ut amet saepe deleniti eligendi doloremque officiis
                    consequatur magnam eos mollitia, obcaecati ipsa. Incidunt,
                    dolore quibusdam?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam ut amet saepe deleniti eligendi doloremque officiis
                    consequatur magnam eos mollitia, obcaecati ipsa. Incidunt,
                    dolore quibusdam?
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img
                    src="https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-scaled.jpg"
                    alt="Programming"
                    className="img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam ut amet saepe deleniti eligendi doloremque officiis
                    consequatur magnam eos mollitia, obcaecati ipsa. Incidunt,
                    dolore quibusdam?
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <img
                    src="https://hachinet.com/upload/2020/08/framework-la-gi-tim-hieu-ve-cac-framework-20200831112124.jpeg"
                    alt="Frameworks"
                    className="img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam ut amet saepe deleniti eligendi doloremque officiis
                    consequatur magnam eos mollitia, obcaecati ipsa. Incidunt,
                    dolore quibusdam?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam ut amet saepe deleniti eligendi doloremque officiis
                    consequatur magnam eos mollitia, obcaecati ipsa. Incidunt,
                    dolore quibusdam?
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <img
                    src="https://miro.medium.com/max/640/1*rz8ww_vLeotjVxrFQQNkxg.png"
                    alt="Libraries"
                    className="img-fluid"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam ut amet saepe deleniti eligendi doloremque officiis
                    consequatur magnam eos mollitia, obcaecati ipsa. Incidunt,
                    dolore quibusdam?
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

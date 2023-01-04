import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import mountainImage from "../assets/mountain1.jpg";
import mountainImage2 from "../assets/mountain2.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w=100" src={mountainImage} alt="Mountain" />
          <Carousel.Caption>
            <h3>Mountain Image</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              culpa.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w=100" src={mountainImage2} alt="Mountain" />
          <Carousel.Caption>
            <h3>Dark Mountain Image</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              culpa.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w=100" src={mountainImage} alt="Mountain" />
          <Carousel.Caption>
            <h3>Mountain Image</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              culpa.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

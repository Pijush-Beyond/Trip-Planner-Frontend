import React from "react";
import { Component, Fragment } from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import '../CarouselComp.css'
import Kashmir from "./assets/Kashmir.jpg";
import Agra from "./assets/Agra.jpg";
import Kerela from "./assets/Kerela.jpg";
import Meghalaya from "./assets/Meghalaya.jpg";
import Rajasthan from "./assets/Rajasthan.jpg";
import Ladakh from"./assets/Ladakh.jpg";


class CarouselComp extends Component {
  render() {
    return (
      <div>
        

        <div className="container-fluid">
          <Carousel keyboard={false} pauseOnHover={true}>
            <Carousel.Item style={{ height: "650px" }} interval={5000}>
              <img
                style={{ height: "650px" }}
                className="d-block w-100"
                src={Ladakh}
              />

              <Carousel.Caption>
                <h2 id='welcome_text'><strong>Awaken To A Different World with </strong></h2><h1><span id='logo_text'><strong>Been There</strong></span></h1>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "650px" }} interval={3000}>
              <img
                style={{ height: "650px" }}
                className="d-block w-100"
                src={Kashmir}
              />

              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "650px" }} interval={3000}>
              <img
                style={{ height: "650px" }}
                className="d-block w-100"
                src={Agra}
              />

              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "650px" }} interval={3000}>
              <img
                style={{ height: "650px" }}
                className="d-block w-100"
                src={Kerela}
              />

              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>
          <Carousel.Item style={{ height: "650px" }} interval={3000}>
              <img
                style={{ height: "650px" }}
                className="d-block w-100"
                src={Meghalaya}
              />

              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "650px" }} interval={3000}>
              <img
                style={{ height: "650px" }}
                className="d-block w-100"
                src={Rajasthan}
              />

              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    );
  }
}

export default CarouselComp;

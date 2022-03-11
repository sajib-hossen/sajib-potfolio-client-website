import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import aboutimg from "../../../images/linkdin-image.png";

const About = () => {
  return (
    <Container>
      <h1>About Me</h1>
      <Row>
        <Col sm={12} md={5} lg={5}>
          <img style={{ width: "100%" }} src={aboutimg} alt="" />
        </Col>
        <Col sm={12} md={7} lg={5}>
          <div
            style={{
              textAling: "center",
              marginLeft: "40px",
              marginTop: "80px",
            }}
          >
            <div>
              <h1>Hi there</h1>
              <p>
                This Sajib Hossen, You can call me Sajib, I,m a full-stack
                developer. Specially MERN Developer. What you know about me, I
                put the some answer below, You may like it.
              </p>
            </div>
            <Row>
              <Col sm={6} md={6}>
                <h2>Name : </h2>
                <p>Sajib Hossen</p>
              </Col>
              <Col sm={6} md={6}>
                <h2>Email :</h2>
                <p>sajibhossensa90@gmail.com</p>
              </Col>
              <Col sm={6} md={6}>
                <h2>Phone :</h2>
                <p>01715676974</p>
              </Col>
              <Col sm={6} md={6}>
                <h2>GitHub</h2>
                <p> https://github.com/sajib-hossen</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

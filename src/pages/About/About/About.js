import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import aboutimg from "../../../images/linkdin-image.png";

const About = () => {
  return (
    <Container>
      <h1 className="text-center my-5 fw-bold">About Me</h1>
      <Row>
        <Col sm={12} md={5} lg={5}>
          <img style={{ width: "100%" }} src={aboutimg} alt="" />
        </Col>
        <Col sm={12} md={7} lg={5}>
          <div
            style={{
              textAling: "center",
              marginLeft: "30px",
              marginTop: "40px",
              padding: "10px",
              width: "auto",
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
            <div className="mt-5">
              <Row>
                <Col className="my-3" sm={6} md={6}>
                  <h2>Name : </h2>
                  <h5>Sajib Hossen</h5>
                </Col>
                <Col className="my-3" sm={6} md={6}>
                  <h2>Email :</h2>
                  <h5>sajibhossensa90@gmail.com</h5>
                </Col>
                <Col className="my-3" sm={6} md={6}>
                  <h2>Phone :</h2>
                  <h5>01715676974</h5>
                </Col>
                <Col className="my-3" sm={6} md={6}>
                  <h2>GitHub : </h2>
                  <h5> https://github.com/sajib-hossen</h5>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

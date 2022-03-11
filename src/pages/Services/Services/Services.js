import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import web from "../../../images/web-development-64.png";
import respon from "../../../images/responsive-64 (1).png";
import desing from "../../../images/web-design-64.png";

const Services = () => {
  return (
    <Container>
      <h1 className="text-center text-info my-5">My Services</h1>
      <Row className="service_container">
        <Col sm={12} md={4} lg={4}>
          <div className="service">
            <h6>
              <img style={{ width: "50px" }} src={web} alt="" />
            </h6>
            <h3> Web Development </h3>
            <p>
              A MERN Stack web application I provide. every kind of website I
              can create
            </p>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="service">
            <h6>
              <img style={{ width: "50px" }} src={respon} alt="" />
            </h6>
            <h3>Responsive Development</h3>
            <p>
              Responsive web development is most import cause user visit site
              PC,Mobile or Tab
            </p>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="service">
            <h6>
              <img style={{ width: "50px" }} src={desing} alt="" />
            </h6>
            <h3>Web Design</h3>
            <p>
              Web Design is the main part for an website, It's satisfy user
              experience and attract user.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./Skills.css";

const Skills = () => {
  return (
    <Container className="skills pt-5">
      <div>
        <div className="text-center">
          <h1 style={{ fontWeight: 700, marginTop: "20px" }}>
            {" "}
            I am expert on
          </h1>
          <p style={{ fontSize: "20px" }}>
            Basically I'm a MERN(MongoDB, ExpressJs, React, NodeJS) Developer.
            Because I love Javascript. It taste more well than Biriyani for me.
          </p>
        </div>
        <Row className="mt-5">
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            <h2>HTML</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
            <h2>JavaScript</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
            <h2>Bootstrap</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar bg-black"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>
            <h2>TypeScript</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <h2>MongoDB</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
            <h2>React-Native</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "40%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                40%
              </div>
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            data-aos="fade-up-left"
            data-aos-duration="2000"
          >
            <h2>CSS</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>
            <h2>React</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
            <h2>Redux</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "65%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                65%
              </div>
            </div>
            <h2>NodeJs</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
            <h2>ExpressJs</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>
            <h2>Tailwind CSS</h2>
            <div
              className="progress"
              style={{ height: "20px", fontSize: "16px" }}
            >
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Skills;

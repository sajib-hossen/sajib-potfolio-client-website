import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";
import github from "../../../images/github.svg";
import instagram from "../../../images/instagram.svg";
import twitter from "../../../images/twitter.svg";
import linkedin from "../../../images/linkedin.svg";

const Banner = () => {
  return (
    <div className="banner_container">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <p>Welcome To my world</p>
              <h1>
                Hi, I'm <span>Sajib Hossen a </span> <br />
                <span style={{ color: "red", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "Javascript Developer",
                      "React Developer",
                      "Full-Stack Developer",
                      "MERN Stack Developer",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="😉"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p>
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I’m not
                adding motion just to spruce things up, but doing it in ways
                that.
              </p>
            </div>
            <div>
              <ul>
                <a
                  href="https://github.com/sajib-hossen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="" width="30px" />
                </a>

                <a
                  href="https://github.com/sajib-hossen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="" width="40px" />
                </a>

                <a
                  href="https://github.com/sajib-hossen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="" width="40px" />
                </a>
                <a
                  href="https://github.com/sajib-hossen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="" width="40px" />
                </a>
              </ul>
            </div>
            <div>
              <button> Hire Me </button>
              <button> Download CV </button>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            hellow
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;

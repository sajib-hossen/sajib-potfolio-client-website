import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import git from "../../../images/github.svg";
import linkdin from "../../../images/linkedin.svg";
import twitter from "../../../images/twitter.svg";
import instagram from "../../../images/instagram.svg";
import banner_img from "../../../images/linkdin-image.png";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";

const Banner = () => {
  return (
    <Container>
      <Row className="banner_row">
        <Col sm={12} md={6} lg={6}>
          <p>Welcome to my world</p>
          <h4> Hello </h4>
          <h1> I'm Sajib Hossen </h1>
          <h2>
            I am a {""}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Javascript Developer",
                  "React Developer",
                  "Full-Stack Web Developer",
                  "MERN Stack Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
          </h2>

          <a href="https://github.com/sajib-hossen">
            {" "}
            <img src={git} alt="" width="40px" />
          </a>
          <a href="https://www.linkedin.com/in/sajib-hossen/">
            {" "}
            <img src={linkdin} alt="" width="45px" />
          </a>
          <a href="https://twitter.com/?lang=en">
            {" "}
            <img src={twitter} alt="" width="50px" />
          </a>
          <a href="https://www.instagram.com/sajibhossensa90/">
            {" "}
            <img src={instagram} alt="" width="50px" />
          </a>

          <div className="mt-4 ">
            <Button className="banner_btn m-1 px-4 py-1" variant="info">
              Hire me
            </Button>
            <Button className="banner_btn px-4 py-1 m-1" variant="info">
              Download Cv
            </Button>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className="banner_image">
            <img src={banner_img} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;

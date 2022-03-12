import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import email from "../../../images/email-64.png";
import phone from "../../../images/phone-64.png";
import locationimg from "../../../images/location-48.png";
import linked from "../../../images/linkedin.svg";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="bg-dark text-white pt-5 contact_container">
      <Container data-aos="fade-up" data-aos-duration="3000">
        <div>
          <h2 className="text-center"> Contact </h2>
        </div>
        <div className="text-center">
          <Row>
            <Col sm={12} md={4} lg={3}>
              <h3>
                {" "}
                <img src={email} alt="" />{" "}
              </h3>
              <p>sajibhossensa90@gmail.com</p>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <h3>
                <img src={phone} alt="" />
              </h3>
              <p>01715676974</p>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <h3>
                <img src={locationimg} alt="" />
              </h3>
              <p>Dhaka ,Bangladesh</p>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <h3>
                <img src={linked} alt="" />
              </h3>
              <p>https://www.linkedin.com/in/sajib-hossen/</p>
            </Col>
          </Row>
        </div>
        <div>
          <form>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <input
                  type="text"
                  className="w-100 p-2 my-2"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </Col>
              <Col sm={12} md={6} lg={6}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-100 p-2 my-2"
                  name="email"
                  id="email"
                />
              </Col>
            </Row>
            <textarea
              name="message"
              id=""
              placeholder="Your Massage"
              cols="30"
              className="w-100 p-2 my-2"
              rows="3"
            ></textarea>
            <Button type="submit" style={{ width: "250px" }} variant="primary">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;

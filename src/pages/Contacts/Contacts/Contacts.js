import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Contacts = () => {
  return (
    <Container className="my-5">
      <div>
        <h2 className="text-center my-5"> Contact </h2>
      </div>
      <div className="text-center">
        <Row>
          <Col sm={12} md={4} lg={4}>
            <h3>Email </h3>
            <p>sajibhossensa90@gmail.com</p>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <h3>Phone</h3>
            <p>01715676974</p>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <h3>Linkedin</h3>
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
  );
};

export default Contacts;

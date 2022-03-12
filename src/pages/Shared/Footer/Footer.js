import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import git from "../../../images/github.svg";
import linkdin from "../../../images/linkedin.svg";
import twitter from "../../../images/twitter.svg";
import instagram from "../../../images/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-dark h-100 text-white">
      <Container>
        <div className="text-center">
          <h1 className="pt-5">Sajib Hossen</h1>
          <p>
            Hi Thanks for visit my website. That's All of you need to know about
            me And You Can connect with me given the bellow social media website
          </p>
        </div>
        <div className="footer_social">
          <p>
            <a
              href="https://github.com/sajib-hossen"
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} alt="" width="40px" />
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/sajib-hossen/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={linkdin} alt="" width="45px" />
            </a>
          </p>
          <p>
            {" "}
            <a
              href="https://twitter.com/?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={twitter} alt="" width="50px" />
            </a>{" "}
          </p>
          <p>
            <a
              href="https://www.instagram.com/sajibhossensa90/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={instagram} alt="" width="50px" />
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

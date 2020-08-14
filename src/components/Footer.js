import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            {/* <Link to="/">
              <img src={props.logo} alt="Logo" />
            </Link> */}
          </div>
          <div className="links right">
            <a
              target="_blank"
              href="https://github.com/mbzhu1"
              rel="noopener noreferrer"
            >
              About
            </a>
            <a
              
              href="#features"
              rel="noopener noreferrer"
            >
              Features
            </a>
            <a
              target="_blank"
              href="https://github.com/mbzhu1"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <a
              target="_blank"
              href="https://medium.com"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </div>
          <div className="social right">
            <a
              href="https://github.com/mbzhu1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-github" />
              </span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-twitter" />
              </span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-facebook-f" />
              </span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-instagram" />
              </span>
            </a>
          </div>
          <div className="copyright left">{props.copyright}</div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;

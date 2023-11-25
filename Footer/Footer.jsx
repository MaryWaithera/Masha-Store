import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>Thank You For Shopping with us!</h1>
            </div>
          </Col>
          <Col md={3} sm={5} className="box">
            <h3>About</h3>
            <a href="#">
              {" "}
              <i class="fas fa-angle-right"> </i> About us{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-angle-right"> </i> Delivery Information
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-angle-right"> </i> Privacy Policy
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-angle-right"> </i> terms & conditions
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-angle-right"> </i> Contact us
            </a>
          </Col>
          <Col md={3} sm={5} className="box">
            <h3>My Account</h3>
            <a href="#">
              {" "}
              <i class="fas fa-angle-right"> </i> Sign in{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-angle-right"> </i> View Cart
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-angle-right"> </i> Track my order
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-angle-right"> </i> Help
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-angle-right"> </i> privacy policy
            </a>
          </Col>
          <Col md={3} sm={5} className="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i class="fas fa-phone"></i>+254-546-9520
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-phone"></i>+254-766-2547
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-envelope"></i>Sarisstore@gmail.com
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-envelope"></i>Sarisstore@gmail.com
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-map"></i>Nairobi, Kenya-01000
            </a>
          </Col>
          <Col md={3} sm={5} className="box">
            <h3>follow us</h3>
            <a href="#">
              {" "}
              <i class="fab fa-facebook-f"></i> facebook{" "}
            </a>
            <br />
            <a href="#">
              {" "}
              <i class="fab fa-twitter"></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-instagram"></i> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-youtube"></i> youtube{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-pinterest"></i> pinterest{" "}
            </a>
            <br />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

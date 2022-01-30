import React from "react";
import styles from './HomeCarouselComponent.module.css';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function HomeCarouselComponent() {
  return (
    <div className={styles.home_carousel}>
      <div className="carouselContainer">
        <Carousel className="carousel" controls="false" indicators="false">
          <Carousel.Item className="carouselItem">
            <div className="firstItem">
              <h4 className="mb-lg-5 crimson-font">
                LineHayat Is Your Friendly And Private Platform To Lend You An
                Ear.
              </h4>
              <p>
                This platform, based in Universiti Sains Malaysia (USM), offers
                peer support that is fully run by students for students, free of
                charge.
              </p>
              <p>
                LineHayat cares about all university students’ well-being and
                continues to make every effort to provide emotional support for
                all students throughout these challenging days.
              </p>
              <p>
                With LineHayat, your privacy is protected. You can express
                yourself freely and anonymously to our Listening Volunteers via
                Call or Live Chat on our website.
              </p>
              <p>We are always here to listen!</p>
              <p style={{ color: "#5B4C43" }}>#YouShareWeCare</p>
              <p className="highlight">Operation hours to be confirmed</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carouselItem">
            <div className="secondItemContainer">
              <Container fluid style={{ height: "100%" }}>
                <Row>
                  <Col sm={12} xs={12} md={12} lg={12}>
                    <h4 className="berkshire-font mb-5">
                      LineHayat Anonymous Chat Service - How it Works?
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} xs={12} md={12} lg={4}>
                    <Image
                      layout="fill"
                      src="/carousel-live-chat-click.svg"
                      className="secondItemImage"
                    />
                    <p>Click the ‘Live Chat’ button.</p>
                  </Col>
                  <Col sm={12} xs={12} md={12} lg={4}>
                    <Image
                      layout="fill"
                      src="/carousel-wait.svg"
                      className="secondItemImage"
                    />
                    <p>
                      Wait for your turn, you will be connected to a Listening
                      Volunteer shortly.
                    </p>
                  </Col>
                  <Col sm={12} xs={12} md={12} lg={4}>
                    <Image
                      layout="fill"
                      src="/carousel-chat-room.svg"
                      className="secondItemImage"
                    />
                    <p>A chatroom will be opened when it reaches your turn.</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container style={{ height: "100%", width: "fit-content" }}>
        <Row style={{ width: "fit-content", marginRight: "0" }}>
          <Col sm={12} xs={12} md={12} lg={6}>
            <Button variant="primary" href="/chat" className="buttonHome">
              Live Chat
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeCarouselComponent;

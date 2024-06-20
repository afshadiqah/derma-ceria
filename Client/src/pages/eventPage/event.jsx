import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./event.module.css";
import CardEvent from "../../components/CardEvent/CardEvent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardEvent3 from "../../assets/images/event1.jpg";
import CardEvent2 from "../../assets/images/event2.png";
import CardEvent1 from "../../assets/images/event3.jpg";

const Event = () => {
  return (
    <div className={styles["body-event"]}>
      <div className={styles["landing-donasi-page"]}>
        <LandingPageComponent />
      </div>

      <div className={styles.eventCard}>
        <Container>
          <Row className="gap-6 max-md:flex-col max-md:gap-0">
            <Col>
              <CardEvent
                imageSrc={CardEvent1}
                label="Dimulai sejak 18 April 2024"
                title="Charity Children Camp SARENITY"
                LinkButton="/eventdetail"
              />
            </Col>
            <Col>
              <CardEvent
                imageSrc={CardEvent2}
                label="Dimulai sejak 18 April 2024"
                title="Charity Together With Diesnatalis Fasilkom"
                LinkButton="/eventdetail"
              />
            </Col>
            <Col>
              <CardEvent
                imageSrc={CardEvent3}
                label="Dimulai sejak 18 April 2024"
                title="Sport Event: Uniting Communities!"
                LinkButton="/eventdetail"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Event;

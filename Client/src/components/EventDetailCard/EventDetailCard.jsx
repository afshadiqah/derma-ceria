import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./EventDetailCard.module.css";

const EventDetailCard = ({ eventName, date, time, location, benefit, imageSrc }) => {
  return (
    <Col md={5}>
      <Container className={`${styles.container}`}>
        <Row>
          <Col>
            <div className={styles.eventInfo}>
              <p>
                <strong>Nama Event</strong>
                <span>: {eventName}</span>
              </p>
              <p>
                <strong>Hari/Tanggal</strong>
                <span>: {date}</span>
              </p>
              <p>
                <strong>Pukul</strong>
                <span>: {time}</span>
              </p>
              <p>
                <strong>Tempat</strong>
                <span>: {location}</span>
              </p>
              <p>
                <strong>Benefit</strong>
                <span>: {benefit}</span>
              </p>
            </div>
          </Col>
          <Col>
            <Card className={styles.cardImg}>
              <Card.Img src={imageSrc} alt="Event" />
            </Card>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default EventDetailCard;

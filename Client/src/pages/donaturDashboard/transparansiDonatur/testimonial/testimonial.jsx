import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from "./testimonial.module.css";

const TestimonialRow = ({ imageSrctestimonial, text, name }) => {
  return (
    <Row className={styles.testimonialRow}>
      <Col>
        <img src={imageSrctestimonial} alt={name} className={styles.imgTestimonial} />
      </Col>
      <Col>
        <Card className={styles.cardTestimonial}>
          {text}
          <br /><br />
          <b>{name}</b>
        </Card>
      </Col>
    </Row>
  );
};

export default TestimonialRow;

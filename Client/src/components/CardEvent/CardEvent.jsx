import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "../CardEvent/CardEvent.module.css";

const CardEvent = ({ imageSrc, label, title, LinkButton }) => {
  return (
    <div>
      <Card className={styles.CardEvent}>
        <div className={styles.imageCard}>
          <Card.Img variant="top" src={imageSrc} />
        </div>
        <Card.Body>
          <div className={styles.titleCard}>
            <Card.Text>{title}</Card.Text>
          </div>
          <div>
          <div className={styles.labelCard}>
            <Card.Text>{label}</Card.Text>
          </div>
              <Link to={LinkButton} className={`btn btn-warning ${styles.btnSelengkapnya}`}>
                Lihat Selengkapnya
              </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardEvent;

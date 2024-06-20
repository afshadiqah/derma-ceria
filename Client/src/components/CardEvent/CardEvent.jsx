import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "../CardEvent/CardEvent.module.css";

const CardEvent = ({ imageSrc, title, startDate, LinkButton }) => {
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
            <Card.Text>Dimulai sejak {new Intl.DateTimeFormat('id-ID', { month: 'long', day: '2-digit', year: 'numeric' }).format(new Date(startDate))}</Card.Text>
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

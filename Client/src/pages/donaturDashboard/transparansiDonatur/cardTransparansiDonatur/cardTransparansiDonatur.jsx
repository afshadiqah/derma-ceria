import React from "react";
import { Card } from "react-bootstrap";
import styles from "./cardTransparansiDonatur.module.css";

const cardTransparansiDonatur = ({ imageSrc, label, title, unduh, kapasitas }) => {
  return (
    <div>
      <Card className={styles.CardImg}>
        <div className={styles.imageCard}>
          <Card.Img variant="top" src={imageSrc} />
        </div>
        <Card.Body>
          <div className={styles.labelCard}>
            <Card.Text>{label}</Card.Text>
          </div>
          <div className={styles.titleCard}>
            <Card.Text>{title}</Card.Text>
          </div>
          <div className={styles.unduhCard}>
            <Card.Text>{unduh}</Card.Text>
          </div>
          <div className={styles.kapasitasCard}>
            <Card.Text>{kapasitas}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default cardTransparansiDonatur;

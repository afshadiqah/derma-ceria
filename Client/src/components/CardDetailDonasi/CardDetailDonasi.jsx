import React from "react";
import { Card, Nav } from "react-bootstrap";

import styles from "../CardDetailDonasi/CardDetailDonasi.module.css";

const CardDetailDonasi = ({ title, imageTitle, deskripsi, imageSrcDetail, text1, text2, text3, text4, text5, text6 }) => {
  return (
    <div className={styles.bodyCardDetailDonasi}>
      <div className={styles.titleDetail}>
        <Card.Text>{title}</Card.Text>
      </div>
      <div className={styles.imageCard}>
        <Card.Img src={imageTitle} />
      </div>
      <hr className={styles.hr} />
      <Card className={styles.CardDetail}>
        <Card.Header>
              <div className={styles.titleCard}>
                <Card.Text>{deskripsi}Deskripsi</Card.Text>
              </div>
        </Card.Header>
        <Card.Body>
          <div className={styles.textCard}>
            <Card.Text>{text1}</Card.Text>
            <Card.Text>{text2}</Card.Text>
            <Card.Text>{text3}</Card.Text>
          </div>
          <div className={styles.imageCard}>
            <Card.Img src={imageSrcDetail} />
          </div>
          <div className={styles.textCard}>
            <Card.Text>{text4}</Card.Text>
            <Card.Text>{text5}</Card.Text>
            <Card.Text>{text6}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDetailDonasi;

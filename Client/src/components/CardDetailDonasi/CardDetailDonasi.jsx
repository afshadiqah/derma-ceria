import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import styles from "../CardDetailDonasi/CardDetailDonasi.module.css";

const CardDetailDonasi = ({ title, imageTitle, imageSrcDetail, text1 }) => {
  // Pisahkan text1 menjadi dua bagian berdasarkan titik
  const sentences = text1.split('. ');
  const middleIndex = Math.floor(sentences.length / 2);
  const textBeforeImage = sentences.slice(0, middleIndex).join('. ') + '.';
  const textAfterImage = sentences.slice(middleIndex).join('. ');

  return (
    <div className={styles.bodyCardDetailDonasi}>
      <div className={styles.titleDetail}>
        <Card.Text>{title}</Card.Text>
      </div>
      <div className={styles.imageCard}>
        <Card.Img src={imageTitle} alt="Title Image" />
      </div>
      <hr className={styles.hr} />
      <Card className={styles.cardDetail}>
        <Card.Header>
          <div className={styles.titleCard}>
            <Card.Text>Deskripsi</Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <div className={styles.textCard}>
            <Card.Text>{textBeforeImage}</Card.Text>
            <div className={styles.imageCard}>
              <Card.Img src={imageSrcDetail} alt="Detail Image" />
            </div>
            <Card.Text>{textAfterImage}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

CardDetailDonasi.propTypes = {
  title: PropTypes.string.isRequired,
  imageTitle: PropTypes.string.isRequired,
  imageSrcDetail: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
};

export default CardDetailDonasi;

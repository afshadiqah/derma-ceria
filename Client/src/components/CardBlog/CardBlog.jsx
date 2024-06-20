import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "../CardBlog/CardBlog.module.css";

const CardBlog = ({ imageSrc, label, text, LinkButton }) => {
  return (
    <div>
      <Card className={styles.CardBlog}>
        <div className={styles.imageCard}>
          <Card.Img variant="top" src={imageSrc} />
        </div>
        <Card.Body>
          <div className={styles.textCard}>
            <Card.Text>{text}</Card.Text>
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

export default CardBlog;

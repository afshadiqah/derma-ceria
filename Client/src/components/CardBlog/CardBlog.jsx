import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../CardBlog/CardBlog.module.css";

const CardBlog = ({ imageSrc, label, text, linkButton, startDate }) => {
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
              <Card.Text>
                Derma Ceria |{" "}
                {new Intl.DateTimeFormat("id-ID", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                }).format(new Date(startDate))}
              </Card.Text>
            </div>
            <Link to={linkButton} className={`btn btn-warning ${styles.btnSelengkapnya}`}>
              Lihat Selengkapnya
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardBlog;

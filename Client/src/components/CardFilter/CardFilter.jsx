import React from "react";
import { Card, ProgressBar, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../CardFilter/CardFilter.module.css";
import ProfileComponent from "../ProfileComponent";

const CardFilter = ({ imageSrc, label, title, dari, progress, terkumpul, LinkButton }) => {
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
          <div className={styles.progressBar}>
            <ProgressBar animated now={progress} variant="warning" style={{ width: "100%", height: "8px" }} />
          </div>
          <div className={styles.amount}>
            <Card.Text>
              <strong>Rp. {terkumpul}</strong> terkumpul dari Rp. {dari}
            </Card.Text>
          </div>
            <div className={styles.profileAndButton}>
              <ProfileComponent />
              <Link to={LinkButton} className={`btn btn-warning ${styles.btnDonasi}`}>
                Donasi
              </Link>
            </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardFilter;

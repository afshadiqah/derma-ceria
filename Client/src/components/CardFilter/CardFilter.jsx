import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileComponent from "../ProfileComponent";
import styles from "./CardFilter.module.css";

const CardFilter = ({ imageSrc, kategori, title, target, terkumpul, LinkButton }) => {
  // Hitung persentase progres
  const progress = target !== 0 ? (terkumpul / target) * 100 : 0;

  return (
    <div>
      <Card className={styles.CardImg}>
        <div className={styles.imageCard}>
          <Card.Img variant="top" src={imageSrc} />
        </div>
        <Card.Body>
          <div className={styles.labelCard}>
            <Card.Text>{kategori}</Card.Text>
          </div>
          <div className={styles.titleCard}>
            <Card.Text>{title}</Card.Text>
          </div>
          <div className={styles.progressBar}>
            <ProgressBar animated now={progress} variant="warning" style={{ height: "10px", fontSize: "0.75rem" }} />
          </div>
          <div className={styles.amount}>
            <Card.Text>
              <strong>Rp {terkumpul ? terkumpul.toLocaleString() : 0}</strong> terkumpul dari Rp {target ? target.toLocaleString() : 0}
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

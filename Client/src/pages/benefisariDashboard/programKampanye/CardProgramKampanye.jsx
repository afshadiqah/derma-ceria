/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";
import { Card, ProgressBar, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from "../programKampanye/programKampanye.module.css";
import ProfileComponent from "../../../components/ProfileComponent";

const CardProgramKampanye = ({ imageSrc, label, title, dari, progress, terkumpul, handleEditItem, handleDeleteItem }) => {
  const status = progress < 100 ? "Berlangsung" : "Selesai";

  return (
    <div>
      <Card className={styles.CardImg}>
        <div className={styles.imageCard}>
          <Card.Img variant="top" src={imageSrc} />
        </div>
        <Card.Body className={styles.cardBody}>
          <div className={styles.labelAndStatus}>
            <div className={`${styles.labelCardKategori} ${styles.labelCard}`}>
              <Card.Text>{label}</Card.Text>
            </div>
            <div className={`${styles.labelCardKategori} ${status === "Berlangsung" ? styles.statusBerlangsung : styles.statusSelesai}`}>
              <Card.Text>{status}</Card.Text>
            </div>
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
            <Button variant="warning" onClick={() => handleEditItem(item)} style={styles.actionButton}>
              <FaEdit />
            </Button>
            <Button variant="warning" onClick={() => handleDeleteItem(item)} style={styles.actionButton}>
              <FaTrash />
            </Button>
          </div>
          {/* <div className={`${styles.labelCardStatus} ${status === "Berlangsung" ? styles.statusBerlangsung : styles.statusSelesai}`}>
              <Card.Text style={{textAlign: "center"}}>{status}</Card.Text>
            </div> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProgramKampanye;

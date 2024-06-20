import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlus } from 'react-icons/fa';
import BenefisariTableTransparansi from "./BenefisariTableTransparansi";
import TambahTransparansi from "./TambahTransparansi"; // Import modal component
import styles from "./transparansiBenefisari.module.css";
import Search from "../../../assets/icons/search.svg"; // Update the import path


const TransparansiBenefisari = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const data = [
    { no: 1, title: "Donasi Untuk Palestine", img: "None", desc: "Kami sebagai masyarakat palestina sangat bersyukur atas kepedulian terhadap kami." },
    { no: 2, title: "Donasi Korban Gempa bumi", img: "None", desc: "Terimakasih untuk DermaCeria atas bantuannya.kami sangat terbantu atas donasi yang sudah diberikan." },
  ];

  const handleAddItem = (item) => {
    console.log("Add item:", item);
    setShowModal(true); // Show modal when adding item
  };

  const handleEditItem = (item) => {
    console.log("Edit item:", item);
  };

  const handleDeleteItem = (item) => {
    console.log("Delete item:", item);
  };

  return (
    <div className={styles.containerWrapper}>
      <Container>
        <h1 className={styles.mainTitle}>Hallo, User</h1>
        <Row>
          <Col>
            <h1 className={styles.subTitle}>Donasi Anda baru-baru ini</h1>
          </Col>
          <Col>
            <div className={styles["input-container"]}>
            <img src={Search} alt="search" />
              <input type="text" placeholder="Search" className={`form-control mx-2 bg-light ${styles.searchInput}`} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="warning" className={styles.addButton} onClick={handleAddItem}>
              <FaPlus /> Tambahkan
            </Button>
          </Col>
        </Row>
        <Row className={`justify-content-center ${styles.rowMargin}`}>
          <Col>
            <BenefisariTableTransparansi
              data={data}
              handleAddItem={handleAddItem}
              handleEditItem={handleEditItem}
              handleDeleteItem={handleDeleteItem}
            />
          </Col>
        </Row>
        <TambahTransparansi showModal={showModal} handleClose={handleCloseModal} />
      </Container>
    </div>
  );
};

export default TransparansiBenefisari;

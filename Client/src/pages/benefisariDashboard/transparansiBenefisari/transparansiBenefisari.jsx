import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlus } from 'react-icons/fa';
import useSWR from 'swr';
import axios from 'axios';
import BenefisariTableTransparansi from "./BenefisariTableTransparansi";
import TambahTransparansi from "./TambahTransparansi";
import styles from "./transparansiBenefisari.module.css";
import Search from "../../../assets/icons/search.svg";

const fetcher = url => axios.get(url).then(res => res.data);

const TransparansiBenefisari = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, error } = useSWR('http://localhost:5000/transparansi_benefisiari', fetcher);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  const handleAddItem = (item) => {
    console.log("Add item:", item);
    setShowModal(true);
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

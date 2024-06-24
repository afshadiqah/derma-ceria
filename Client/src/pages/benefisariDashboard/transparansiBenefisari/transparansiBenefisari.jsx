import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import useSWR, { mutate } from "swr";
import axios from "axios";
import BenefisariTableTransparansi from "./TableTransparansi";
import TambahTransparansi from "./TambahTransparansi";
import EditTransparansi from "./EditTransparansi";
import styles from "./transparansiBenefisari.module.css";
import Search from "../../../assets/icons/search.svg";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const TransparansiBenefisari = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);
  const { data, error } = useSWR("http://localhost:5000/transparansi_benefisiari", fetcher);

  const handleCloseAddModal = () => setShowAddModal(false);
  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = (item) => {
    setItemToEdit(item);
    setShowEditModal(true);
  };
  const handleCloseConfirmModal = () => setShowConfirmModal(false);
  const handleShowConfirmModal = (item) => {
    setItemToDelete(item);
    setShowConfirmModal(true);
  };

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) => item.anggaran_program.toLowerCase().includes(searchQuery.toLowerCase()) || item.testimoni.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleAddItem = () => {
    setShowAddModal(true);
  };

  const handleSaveItem = () => {
    mutate("http://localhost:5000/transparansi_benefisiari");
  };

  const handleEditItem = (item) => {
    setItemToEdit(item);
    handleShowEditModal(item);
  };

  const handleDeleteItem = async () => {
    if (itemToDelete) {
      try {
        await axios.delete(`http://localhost:5000/transparansi_benefisiari/${itemToDelete.id_transparansibene}`);
        mutate("http://localhost:5000/transparansi_benefisiari");
        handleCloseConfirmModal();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
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
              <input type="text" placeholder="Search" className={`form-control mx-2 bg-light ${styles.searchInput}`} value={searchQuery} onChange={handleSearchChange} />
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
              data={filteredData}
              // data={data}
              handleAddItem={handleAddItem}
              handleEditItem={handleEditItem}
              handleShowConfirmModal={handleShowConfirmModal}
            />
          </Col>
        </Row>
        <TambahTransparansi showModal={showAddModal} handleClose={handleCloseAddModal} handleSave={handleSaveItem} />
        <EditTransparansi data={filteredData} showModal={showEditModal} handleClose={handleCloseEditModal} itemToEdit={itemToEdit} handleSave={handleSaveItem} />
      </Container>

      <Modal show={showConfirmModal} onHide={handleCloseConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Penghapusan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Anda yakin ingin menghapus item ini?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmModal}>
            Batal
          </Button>
          <Button variant="warning" style={{ fontWeight: "500" }} onClick={handleDeleteItem}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TransparansiBenefisari;

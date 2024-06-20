import React from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import Search from "../../../assets/icons/search.svg"; // Update the import path

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./dashboardBenefisari.module.css";

const dashboardBenefisari = () => {
  const headers = ["No", "Campaign", "Donasi/Target", "Status"];

  const data = [
    ["1", "Donasi bantuan untuk anak Indonesia", "Rp. 20.000.000", "Berlangsung"],
    ["2", "Donasi darurat pasien ICU", "Rp. 20.000.000", "Berlangsung"],
    ["3", "Donasi korban gempa bumi", "Rp. 20.000.000", "Berlangsung"],
    ["4", "Donasi paket takjil", "Rp. 10.000.000", "Selesai"],
    ["5", "Donasi untuk Palestina", "Rp. 30.000.000", "Berlangsung"],
    ["6", "Donasi korban banjir", "Rp. 20.000.000", "Selelasai"],
  ];

  const renderTableHeader = () => {
    return headers.map((header, index) => (
      <th key={index} style={{ backgroundColor: "#f8b22d", color: "black" }}>
        {header}
      </th>
    ));
  };

  const renderTableBody = () => {
    return data.map((rowData, rowIndex) => (
      <tr
          key={rowIndex}
          style={{ backgroundColor: rowIndex % 2 === 1 ? '#ffcc99' : 'transparent' }} // Warna oranye muda untuk baris ganjil
        >
          {rowData.map((cellData, cellIndex) => (
            <td key={cellIndex}>{cellData}</td>
          ))}
        </tr>
      
    ));
  };

  return (
    <div className={styles.dashboardContent}>
      <Container>
        <h1 className={`${styles.h1Title}`}>Hallo, User</h1>
        <Row className="d-flex flex-wrap justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className={styles.cardDashboard}>
              <Card.Body className="position-relative">
                <Card.Title className={styles.cardTitle}>Total Donasi</Card.Title>
                <Card.Text className={styles.cardText}>Rp. 10.000.000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className={styles.cardDashboard}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>Campaign</Card.Title>
                <Card.Text className={styles.cardText}>2</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className={styles.cardDashboard}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>Total Pencairan Dana</Card.Title>
                <Card.Text className={styles.cardText}>Rp. 5.000.000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className={styles.h1Title}>Kampanye Anda baru-baru ini</h1>
          </Col>
          <Col>
            <div className={styles["input-container"]}>
            <img src={Search} alt="search" />
              <input type="text" placeholder="Search" className={`form-control mx-2 bg-light ${styles.searchInput}`} />
            </div>
          </Col>
        </Row>
        <Row>
          <div className="container my-5">
            <table className="table table-bordered table-striped position-relative">
              <thead>
                <tr className={styles.tableHeader}>{renderTableHeader()}</tr>
              </thead>
              <tbody className={styles.tableBody}>{renderTableBody()}</tbody>
            </table>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default dashboardBenefisari;

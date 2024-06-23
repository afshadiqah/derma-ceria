import React from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import Search from "../../../assets/icons/search.svg"; // Update the import path

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./dashboardDonatur.module.css";

const dashboardDonatur = () => {
    const headers = ["No", "Tanggal", "Donasi", "Jumlah Donasi", "Program", "Penerima"];

    const data = [
      ["1", "07-05-2024", "Dana", "Rp. 50.000", "Santunan Yatim", "Yayasan Chahya Ilahi"],
      ["2", "07-05-2024", "Dana", "Rp. 200.000", "Bantu Dhuafa", "Nenek Sutiem"],
      ["3", "07-05-2024", "Dana", "Rp. 100.000", "Qurban", "Yayasan Al Huda"],
      ["4", "07-05-2024", "Barang", "Rp. 1.000.000", "Bantu Sekolah", "Yayasan Adi Bungsu"],
      ["5", "07-05-2024", "Pakaian", "Rp. 1.000.000", "Bencana", "Panti Asuhan Pelita"],
      ["6", "07-05-2024", "Dana", "Rp. 2.000.000", "Santunan Yatim", "Panti Asuhan Pelita"],
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
          style={{ backgroundColor: rowIndex % 2 === 1 ? '#ffcc99' : 'transparent' }} 
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
                <Card.Title className={styles.cardTitle}>Jumlah Donasi</Card.Title>
                <Card.Text className={styles.cardText}>15</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col>
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>Donasi Anda baru-baru ini</h1>
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

export default dashboardDonatur;

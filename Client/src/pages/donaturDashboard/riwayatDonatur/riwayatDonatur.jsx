import React from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./riwayatDonatur.module.css";

const RiwayatDonatur = () => {
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
        <h1 className={`${styles.h1Title}`}>Riwayat Donasi</h1>
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
        <Row>
          <Col>
            <Button variant="warning" className={styles.donasiButton}>
              <Nav.Link href="/donasi">Donasi Sekarang</Nav.Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RiwayatDonatur;

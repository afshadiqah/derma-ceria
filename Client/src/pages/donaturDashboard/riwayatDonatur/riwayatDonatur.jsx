import React from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./riwayatDonatur.module.css";

import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const RiwayatDonatur = () => {
  const { data, error } = useSWR("http://localhost:5000/dashboard_donatur", fetcher);

  const headers = ["No", "Tanggal", "Donasi", "Jumlah Donasi", "Program", "Penerima"];

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // Filter the data based on id_user = 1
  const filteredData = data.filter((donasi) => donasi.id_user === 1);

  // Extract user name from the filtered data
  const userName = filteredData.length > 0 ? filteredData[0].nama_user : "User";

  // Format numbers as currency without decimals
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Format date to dd/mm/yyyy
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const renderTableHeader = () => {
    return headers.map((header, index) => (
      <th key={index} style={{ backgroundColor: "#f8b22d", color: "black" }}>
        {header}
      </th>
    ));
  };

  const renderTableBody = () => {
    return filteredData.map((donasi, index) => (
      <tr
        key={donasi.id_dashboarddonatur}
        style={{
          backgroundColor: index % 2 === 1 ? "#ffcc99" : "transparent",
        }} // Warna oranye muda untuk baris ganjil
      >
        <td style={{ textAlign: "center" }}>{index + 1}</td>
        <td>{formatDate(donasi.tanggal)}</td>
        <td>{donasi.jenis_donasi}</td>
        <td style={{ textAlign: "left" }}>{formatCurrency(donasi.jumlah_donasi)}</td>
        <td>{donasi.program_donasi}</td>
        <td>{donasi.penerima_donasi}</td>
      </tr>
    ));
  };

  return (
    <div className={styles.dashboardContent}>
      <Container>
        <Row>
          <Col>
            <h1 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "20px", marginBottom: "-20px" }}>Riwayat Donasi</h1>
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

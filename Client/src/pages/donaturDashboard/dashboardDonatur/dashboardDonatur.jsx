import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import useSWR from "swr";
import axios from "axios";
import Search from "../../../assets/icons/search.svg"; // Update the import path

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./dashboardDonatur.module.css";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DashboardDonatur = () => {
  const { data, error } = useSWR("http://localhost:5000/dashboard_donatur", fetcher);

  const headers = ["No", "Tanggal", "Donasi", "Jumlah Donasi", "Program", "Penerima"];

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // Filter the data based on id_user = 1
  const filteredData = data.filter((donasi) => donasi.id_user === 1);

  // Ensure jumlah_donasi values are numbers
  const totalDonations = filteredData.reduce((total, donasi) => total + parseFloat(donasi.jumlah_donasi), 0);
  const amountDonationCount = filteredData.length;

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
        <h1 className={`${styles.h1Title}`}>Hallo, {userName}</h1>
        <Row className="d-flex flex-wrap justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className={styles.cardDashboard}>
              <Card.Body className="position-relative">
                <Card.Title className={styles.cardTitle}>Total Donasi</Card.Title>
                <Card.Text className={styles.cardText}>{formatCurrency(totalDonations)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className={styles.cardDashboard}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>Jumlah Donasi</Card.Title>
                <Card.Text className={styles.cardText}>{amountDonationCount}</Card.Text>
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

export default DashboardDonatur;

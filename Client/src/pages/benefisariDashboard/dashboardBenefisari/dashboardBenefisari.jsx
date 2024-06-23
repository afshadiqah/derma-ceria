import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import useSWR from "swr";
import axios from "axios";
import Search from "../../../assets/icons/search.svg"; // Update the import path

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./dashboardBenefisari.module.css";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const dashboardBenefisari = () => {
  const { data, error } = useSWR("http://localhost:5000/kampanye", fetcher);

  const headers = ["No", "Campaign", "Terkumpul","Target", "Status"];

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // Filter the data based on id_user = 1
  const filteredData = data.filter((kampanye) => kampanye.id_user === 1);

  const renderTableHeader = () => {
    return headers.map((header, index) => (
      <th key={index} style={{ backgroundColor: "#f8b22d", color: "black" }}>
        {header}
      </th>
    ));
  };

  const renderTableBody = () => {
    return filteredData.map((kampanye, index) => (
      <tr
        key={kampanye.id_kampanye}
        style={{
          backgroundColor: index % 2 === 1 ? "#ffcc99" : "transparent",
        }} // Warna oranye muda untuk baris ganjil
      >
        <td style={{ textAlign: "center" }}>{index + 1}</td>
        <td>{kampanye.kampanye_title}</td>
        <td style={{ textAlign: "left" }}>{`Rp. ${kampanye.terkumpul}`}</td>
        <td style={{ textAlign: "left" }}>{`Rp. ${kampanye.target}`}</td>
        <td style={{ textAlign: "center" }}>
          {new Date(kampanye.end_date) > new Date() ? "Berlangsung" : "Selesai"}
        </td>
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

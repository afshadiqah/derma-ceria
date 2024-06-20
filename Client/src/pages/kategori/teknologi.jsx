import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./kategori.module.css"; // Pastikan ini mengimpor file CSS

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgtekno1 from "../../assets/images/tekno1.jpg";
import CardImgtekno2 from "../../assets/images/tekno2.jpg";
import CardImgtekno3 from "../../assets/images/tekno3.jpg";
import CardImgtekno4 from "../../assets/images/tekno4.jpg";
import CardImgtekno5 from "../../assets/images/tekno5.jpg";
import CardImgtekno6 from "../../assets/images/tekno6.jpg";

const teknologi = () => {
  return (
    <div className={styles["body-kategori"]}>
      <div className={styles["landing-donasi-page"]}>
        <LandingPageComponent />
      </div>

      <div className={styles["donasi-card-img"]}>
        <Container className="px-4">
          <Row>
            <FilterComponent />
            <Col>
              <Row className="gap-6">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgtekno1} label="Teknologi" title="Donasi Laptop Untuk Remaja Milenial" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailTeknologi" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgtekno2} label="Teknologi" title="Donasi Pengadaan Laptop Media Pembelajaran" dari="50.000.000" progress={3} terkumpul="1.000.000" LinkButton="/detailTeknologi" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgtekno3} label="Teknologi" title="Donasi Alat Elektronik Bekas Untuk Pelajar" dari="60.000.000" progress={20} terkumpul="15.000.000" LinkButton="/detailTeknologi" />
                </Col>
              </Row>

              <Row className="gap-6">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgtekno4} label="Teknologi" title="Dukung Peralatan Multimedia Dakwah" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailTeknologi" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgtekno5} label="Teknologi" title="Mari Sumbangkan Teknologi Gerakan Sosial!" dari="50.000.000" progress={25} terkumpul="10.611.123" LinkButton="/detailTeknologi" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgtekno6} label="Teknologi" title="Ayo Donasi Teknologi Untuk Pelajar!" dari="50.000.000" progress={15} terkumpul="22.134.786" LinkButton="/detailTeknologi" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* end card */}
    </div>
  );
};

export default teknologi;

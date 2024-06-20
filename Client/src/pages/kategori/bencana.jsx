import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./kategori.module.css"; // Pastikan ini mengimpor file CSS

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgbenc1 from "../../assets/images/benc3.png";
import CardImgbenc2 from "../../assets/images/benc1.png";
import CardImgbenc3 from "../../assets/images/benc2.png";
import CardImgbenc4 from "../../assets/images/benc6.jpg";
import CardImgbenc5 from "../../assets/images/benc4.jpg";
import CardImgbenc6 from "../../assets/images/benc5.png";

const bencana = () => {
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
                  <CardFilter imageSrc={CardImgbenc1} label="Bencana" title="Donasi Peduli dan Tanggap Bencana Gempa" dari="70.000.000" progress={30} terkumpul="20.000.000" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgbenc2} label="Bencana" title="Pray For Gunung Semeru Lumajang" dari="20.000.000" progress={100} terkumpul="20.000.000" LinkButton="/detailBencana" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgbenc3} label="Bencana" title="Peduli Bencana Erupsi dan Banjir Lahar" dari="50.000.000" progress={94} terkumpul="40.205.000" LinkButton="/detailBencana" />
                </Col>
              </Row>
              <Row className="gap-6">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgbenc4} label="Bencana" title="Donasi Untuk Korban Gempa Bumi" dari="20.000.000" progress={80} terkumpul="15.000.000" LinkButton="/detailBencana" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgbenc5} label="Bencana" title="Bantu Ribuan Warga yang Terdampak Gunung Meletus" dari="50.000.000" progress={22} terkumpul="15.546.876" LinkButton="/detailBencana" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgbenc6} label="Bencana" title="Asap Tebal Kebakaran Hutan Kepung Kalbar!" dari="500.000.000" progress={40} terkumpul="249.546.876" LinkButton="/detailBencana" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default bencana;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./kategori.module.css"; // Pastikan ini mengimpor file CSS

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgpend1 from "../../assets/images/pend1.png";
import CardImgpend2 from "../../assets/images/pend2.jpg";
import CardImgpend3 from "../../assets/images/pend3.jpg";
import CardImgpend4 from "../../assets/images/pend4.png";
import CardImgpend5 from "../../assets/images/pend5.jpg";
import CardImgpend6 from "../../assets/images/pend6.jpg";

const pendidikan = () => {
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
                  <CardFilter imageSrc={CardImgpend1} label="Pendidikan" title="Donasi Pendidikan Anak Yatim & Dhu'afa" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgpend2} label="Pendidikan" title="Berbagi Paket Pendidikan Untuk Masa Depan" dari="50.000.000" progress={20} terkumpul="10.000.000" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgpend3} label="Pendidikan" title="Berdayakan Ratusan Perempuan Pencari Nafkah" dari="500.000.000" progress={90} terkumpul="444.870.966" LinkButton="/detailPendidikan" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgpend4} label="Pendidikan" title="Bantu Anak Daerah Untuk Mendapatkan Pendidikan" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgpend5} label="Pendidikan" title="Bantu Pendidikan Masyarakat Kurang Mampu" dari="50.000.000" progress={25} terkumpul="10.611.123" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgpend6} label="Pendidikan" title="Gantikan 10.000 Mushaf Untuk Siswa Pelosok" dari="20.000.000" progress={15} terkumpul="4.010.000" LinkButton="/detailPendidikan" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default pendidikan;

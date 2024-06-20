import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./kategori.module.css";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgsehat1 from "../../assets/images/sehat1.jpg";
import CardImgsehat2 from "../../assets/images/sehat2.jpg";
import CardImgsehat3 from "../../assets/images/sehat4.jpg";
import CardImgsehat4 from "../../assets/images/sehat4.jpg";
import CardImgsehat5 from "../../assets/images/sehat5.jpg";
import CardImgsehat6 from "../../assets/images/sehat6.jpg";

const kesehatan = () => {
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
                  <CardFilter imageSrc={CardImgsehat1} label="Kesehatan" title="Donasi Cepat Untuk Pasien ICU Keadaan Darurat" dari="100.000.000" progress={23} terkumpul="22.543.111" LinkButton="/detailKesehatan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgsehat2} label="Kesehatan" title="Donasi Jaminan Kesehatan Untuk Dhu'afa" dari="100.000.000" progress={56} terkumpul="55.510.220" LinkButton="/detailKesehatan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgsehat3} label="Kesehatan" title="Bantu Mudahkan Akses Kesehatan Masyarakat" dari="100.000.000" progress={100} terkumpul="100.000.000" LinkButton="/detailKesehatan" />
                </Col>
              </Row>
              <Row className="gap-6">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgsehat4} label="Kesehatan" title="Bantu Para Pejuang Transplantasi Hati" dari="60.000.000" progress={85} terkumpul="45.000.000" LinkButton="/detailKesehatan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgsehat5} label="Kesehatan" title="Donasi Untuk Membeli Kaki Palsu" dari="50.000.000" progress={60} terkumpul="33.250.005" LinkButton="/detailKesehatan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgsehat6} label="Kesehatan" title="Bantu Anak dengan Kondisi Kronis Untuk Berobat" dari="116.650.000" progress={15} terkumpul="40.282.072" LinkButton="/detailKesehatan" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default kesehatan;

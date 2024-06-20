import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./status.module.css";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgdiperpanjang1 from "../../assets/images/diperpanjang1.png";
import CardImgdiperpanjang2 from "../../assets/images/diperpanjang2.jpg";
import CardImgdiperpanjang3 from "../../assets/images/diperpanjang3.jpg";
import CardImgdiperpanjang4 from "../../assets/images/diperpanjang4.png";
import CardImgdiperpanjang5 from "../../assets/images/diperpanjang5.jpg";
import CardImgdiperpanjang6 from "../../assets/images/diperpanjang6.jpg";

const diperpanjang = () => {
  // Nama fungsi diganti menjadi diperpanjang (Huruf awal kapital sesuai konvensi React)
  return (
    <div className={styles["body-status"]}>
      <div className={styles["landing-donasi-page"]}>
        <LandingPageComponent />
      </div>

      <div className={styles["donasi-card-img"]}>
        <Container className="px-4">
          <Row>
            <FilterComponent />
            <Col>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgdiperpanjang1} label="Sosial" title="Kumpulkan Sumbangan Untuk Panti Asuhan" dari="25.000.000" progress={80} terkumpul="10.000.000" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgdiperpanjang2} label="Teknologi" title="Donasi Alat Elektronik Bekas Untuk Pelajar" dari="50.000.000" progress={20} terkumpul="10.000.000" LinkButton="/detailTeknologi" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgdiperpanjang3} label="Kesehatan" title="Mukjizat tuk Ratusan Pejuang Transplantasi Hati" dari="100.000.000" progress={40} terkumpul="25.000.000" LinkButton="/detailKesehatan" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgdiperpanjang4} label="Pendidikan" title="Bantu Anak Daerah Untuk Mendapatkan Pendidikan" dari="90.000.000" progress={35} terkumpul="20.000.000" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgdiperpanjang5} label="Zakat" title="Tunaikan Zakat Maal Anda Sekarang!" dari="20.000.000" progress={98} terkumpul="19.000.000" LinkButton="/detailzakat" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgdiperpanjang6} label="Sosial" title="Bersama Berbagi Kebahagiaan di Hari Raya" dari="100.000.000" progress={50} terkumpul="50.000.000" LinkButton="/detailSosial" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default diperpanjang;

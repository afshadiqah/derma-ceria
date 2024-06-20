import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./diurutkan.module.css";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgmendesak1 from "../../assets/images/mendesak1.png";
import CardImgmendesak2 from "../../assets/images/mendesak2.jpg";
import CardImgmendesak3 from "../../assets/images/mendesak3.png";
import CardImgmendesak4 from "../../assets/images/mendesak4.png";
import CardImgmendesak5 from "../../assets/images/mendesak5.png";
import CardImgmendesak6 from "../../assets/images/mendesak6.png";

const mendesak = () => {
  return (
    <div className={styles["body-diurutkan"]}>
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
                  <CardFilter imageSrc={CardImgmendesak1} label="Bencana" title="Bantu Warga Terdampak Banjir di Sumbar" dari="50.000.000" progress={30} terkumpul="15.546.876" LinkButton="/detailBencana" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgmendesak2} label="Kesehatan" title="Anak dengan Penyakit Kronis Gagal Berobat" dari="116.650.000" progress={20} terkumpul="40.282.072" LinkButton="/detailBencana" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgmendesak3} label="Bencana" title="Asap Tebal Kebakaran Hutan Kalbar!" dari="500.000.000" progress={45} terkumpul="249.546.876" LinkButton="/detailBencana" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgmendesak4} label="Sosial" title="Selimut Gaza! Bantu Mereka Di Pengungsian" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgmendesak5} label="Sosial" title="Donatur Tetap Untuk 22 Anak Panti Asuhan" dari="50.000.000" progress={18} terkumpul="4.350.000" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgmendesak6} label="Kesehatan" title="Bantu Kepala Hamzah Kembali Normal" dari="90.000.000" progress={14} terkumpul="8.500.000" LinkButton="/detailKesehatan" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default mendesak;

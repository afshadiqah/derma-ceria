import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./diurutkan.module.css";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgterlama1 from "../../assets/images/terlama1.png";
import CardImgterlama2 from "../../assets/images/terlama2.jpg";
import CardImgterlama3 from "../../assets/images/terlama3.jpg";
import CardImgterlama4 from "../../assets/images/terlama4.png";
import CardImgterlama5 from "../../assets/images/terlama5.png";
import CardImgterlama6 from "../../assets/images/terlama6.png";

const terlama = () => {
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
                  <CardFilter imageSrc={CardImgterlama1} label="Pendidikan" title="Donasi Pendidikan Anak Yatim &amp; Dhu'afa" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgterlama2} label="Teknologi" title="Mari Sumbangkan Teknologi Gerakan Sosial!" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailTeknologi" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgterlama3} label="Pendidikan" title="Donasi Alumni Magister Teknologi Pendidikan" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailPendidikan" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgterlama4} label="Sosial" title="Donasi Pembangunan Ponpes Tahfidz" dari="100.000.000" progress={5} terkumpul="5.000.000" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgterlama5} label="Sosial" title="Kumpulkan Sumbangan Untuk Panti Asuhan" dari="25.000.000" progress={0} terkumpul="15.000.000" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgterlama6} label="Sosial" title="Berbagi Kasih Untuk Yatim Piatu &amp; Dhu'afa" dari="100.000.000" progress={0} terkumpul="2.000.000" LinkButton="/detailSosial" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default terlama;

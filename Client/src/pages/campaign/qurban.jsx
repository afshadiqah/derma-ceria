import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./campaign.module.css";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgqurban1 from "../../assets/images/qurban1.jpg";
import CardImgqurban2 from "../../assets/images/qurban2.jpg";
import CardImgqurban3 from "../../assets/images/qurban3.jpg";
import CardImgqurban4 from "../../assets/images/qurban4.jpg";
import CardImgqurban5 from "../../assets/images/qurban5.jpg";
import CardImgqurban6 from "../../assets/images/qurban6.jpg";

const qurban = () => {
  // Nama fungsi diganti menjadi Qurban (Huruf awal kapital sesuai konvensi React)
  return (
    <div className={styles["body-campaign"]}>
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
                  <CardFilter imageSrc={CardImgqurban1} label="Qurban" title="Berbagi Hewan Kurban, Berbagi Keberkahan" dari="150.000.000" progress={100} terkumpul="150.000.000" LinkButton="/detailQurban" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgqurban2} label="Qurban" title="Ulurkan Tangan, Sebarkan Kebaikan di Hari Raya" dari="100.000.000" progress={0} terkumpul="0" LinkButton="/detailQurban" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgqurban3} label="Qurban" title="Aksi Sosial Berbagi Hewan Kurban untuk Sesama" dari="100.000.000" progress={0} terkumpul="0" LinkButton="/detailQurban" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgqurban4} label="Qurban" title="Rayakan Idul Adha dengan Berbagi dan Peduli" dari="20.000.000" progress={0} terkumpul="0" LinkButton="/detailQurban" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgqurban5} label="Qurban" title="Berbagi Rezeki, Sebarkan Berkah untuk Sesama" dari="50.000.000" progress={0} terkumpul="0" LinkButton="/detailQurban" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgqurban6} label="Qurban" title="Bersama Berbagi Kebahagiaan di Hari Raya" dari="70.000.000" progress={0} terkumpul="0" LinkButton="/detailQurban" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default qurban;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./kategori.module.css"; // Pastikan ini mengimpor file CSS

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgsos1 from "../../assets/images/sos1.jpg";
import CardImgsos2 from "../../assets/images/sos2.png";
import CardImgsos3 from "../../assets/images/sos3.png";
import CardImgsos4 from "../../assets/images/sos4.png";
import CardImgsos5 from "../../assets/images/sos5.png";
import CardImgsos6 from "../../assets/images/sos6.png";

const sosial = () => {
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
                  <CardFilter imageSrc={CardImgsos1} label="Sosial" title="Berbagi Kasih untuk Yatim Dhu'afa" dari="10.000.000" progress={0} terkumpul="0" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgsos2} label="Sosial" title="Kumpulkan Sumbangan Untuk Panti Asuhan" dari="25.000.000" progress={70} terkumpul="10.000.000" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgsos3} label="Sosial" title="Meraih Syurga bersama Anak Yatim Dhu'afa" dari="10.000.000" progress={0} terkumpul="0" LinkButton="/detailSosial" />
                </Col>
              </Row>

              <Row className="gap-6">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgsos4} label="Sosial" title="Ayo Peduli Terhadap Orang-Orang Difabel!" dari="20.000.000" progress={0} terkumpul="0" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgsos5} label="Sosial" title="Bantu Guru di Pelosok dengan Sedekah Subuh" dari="50.000.000" progress={0} terkumpul="0" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgsos6} label="Sosial" title="Bantu Anak Berkebutuhan Khusus Hidup Layak" dari="70.000.000" progress={0} terkumpul="0" LinkButton="/detailSosial" />
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

export default sosial;

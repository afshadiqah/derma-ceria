import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./campaign.module.css";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgzakat1 from "../../assets/images/zakat1.jpg";
import CardImgzakat2 from "../../assets/images/zakat2.jpg";
import CardImgzakat3 from "../../assets/images/zakat3.jpg"; // Gambar ke-3 diganti
import CardImgzakat4 from "../../assets/images/zakat4.jpg";
import CardImgzakat5 from "../../assets/images/zakat5.jpg";
import CardImgzakat6 from "../../assets/images/zakat6.jpg";

const zakat = () => {
  // Nama fungsi diganti menjadi Zakat (Huruf awal kapital sesuai konvensi React)
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
                  <CardFilter imageSrc={CardImgzakat1} label="Zakat" title="Jangan Lupa! Tunaikan Zakat Fitrah" dari="150.000.000" progress={100} terkumpul="150.000.000" LinkButton="/detailZakat" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgzakat2} label="Zakat" title="Tunaikan 2,5% Penghasilan Sebagai Zakat" dari="100.000.000" progress={0} terkumpul="0" LinkButton="/detailZakat" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgzakat3} label="Zakat" title="Sempurnakan ibadah puasa dengan Zakat Fitrah" dari="100.000.000" progress={0} terkumpul="0" LinkButton="/detailZakat" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgzakat4} label="Zakat" title="Tunaikan Zakat Maal Anda Sekarang!" dari="20.000.000" progress={0} terkumpul="0" LinkButton="/detailZakat" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgzakat5} label="Zakat" title="Mari Membersihkan Harta & Jiwa dengan Zakat" dari="50.000.000" progress={0} terkumpul="0" LinkButton="/detailZakat" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgzakat6} label="Zakat" title="Ayo Bersihkan Hartamu dengan Zakat Maal" dari="70.000.000" progress={0} terkumpul="0" LinkButton="/detailZakat" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default zakat;

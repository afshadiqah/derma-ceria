import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./diurutkan.module.css";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgpopuler1 from "../../assets/images/populer1.png";
import CardImgpopuler2 from "../../assets/images/populer2.png";
import CardImgpopuler3 from "../../assets/images/populer3.jpg";
import CardImgpopuler4 from "../../assets/images/populer4.jpg";
import CardImgpopuler5 from "../../assets/images/populer5.png";
import CardImgpopuler6 from "../../assets/images/populer6.png";

const populer = () => {
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
                  <CardFilter imageSrc={CardImgpopuler1} label="Bencana" title="Asap Tebal Kebakaran Hutan Kalbar!" dari="500.000.000" progress={49} terkumpul="249.546.876" LinkButton="/detailBencana" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgpopuler2} label="Pendidikan" title="Berbagi Paket Pendidikan Untuk Masa Depan" dari="50.000.000" progress={0} terkumpul="41.232.112" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgpopuler3} label="Sosial" title="Gantikan 10.000 Mushaf Milik Santri yang Usang" dari="5.500.000" progress={0} terkumpul="3.040.000" LinkButton="/detailSosial" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgpopuler4} label="Kesehatan" title="Bantu Anak dengan Kondisi Kronis Untuk Berobat" dari="116.650.000" progress={0} terkumpul="40.282.072" LinkButton="/detailKesehatan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgpopuler5} label="Sosial" title="Bantu Guru Pelosok Daerah dengan Sedekah Subuh" dari="100.000.000" progress={0} terkumpul="66.611.863" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgpopuler6} label="Pendidikan" title="Donasi Pendidikan Anak Yatim & Dhu’afa" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailPendidikan" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default populer;

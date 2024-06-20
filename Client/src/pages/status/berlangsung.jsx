import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./status.module.css";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgberlangsung1 from "../../assets/images/berlangsung1.png";
import CardImgberlangsung2 from "../../assets/images/berlangsung2.jpg";
import CardImgberlangsung3 from "../../assets/images/berlangsung3.png";
import CardImgberlangsung4 from "../../assets/images/berlangsung4.png";
import CardImgberlangsung5 from "../../assets/images/berlangsung5.jpg";
import CardImgberlangsung6 from "../../assets/images/berlangsung6.jpg";

const berlangsung = () => {
  // Nama fungsi diganti menjadi berlangsung (Huruf awal kapital sesuai konvensi React)
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
                  <CardFilter imageSrc={CardImgberlangsung1} label="Pendidikan" title="Donasi Pendidikan Anak Yatim & Dhu'afa" dari="50.000.000" progress={100} terkumpul="5.000.000" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgberlangsung2} label="Pendidikan" title="Berbagi Paket Pendidikan Untuk Masa Depan" dari="50.000.000" progress={0} terkumpul="10.000.000" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgberlangsung3} label="Bencana" title="Asap Tebal Kebakaran Hutan Kalbar!" dari="500.000.000" progress={70} terkumpul="249.546.876" LinkButton="/detailBencana" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgberlangsung4} label="Sosial" title="Bantu Guru Pelosok Daerah dengan Sedekah Subuh" dari="50.000.000" progress={0} terkumpul="0" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgberlangsung5} label="Kesehatan" title="Bantu Anak dengan Kondisi Kronis Untuk Berobat" dari="116.650.000" progress={60} terkumpul="40.282.072" LinkButton="/detailKesehatan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgberlangsung6} label="Pendidikan" title="Gantikan 10.000 Mushaf Untuk Siswa Pelosok" dari="20.000.000" progress={0} terkumpul="4.011.000" LinkButton="/detailPendidikan" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default berlangsung;

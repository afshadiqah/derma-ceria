import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./status.module.css";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgselesai1 from "../../assets/images/selesai1.jpg";
import CardImgselesai2 from "../../assets/images/selesai2.png";
import CardImgselesai3 from "../../assets/images/selesai3.png";
import CardImgselesai4 from "../../assets/images/selesai4.png";
import CardImgselesai5 from "../../assets/images/selesai5.png";
import CardImgselesai6 from "../../assets/images/selesai6.jpg";

const selesai = () => {
  // Nama fungsi diganti menjadi selesai (Huruf awal kapital sesuai konvensi React)
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
                  <CardFilter imageSrc={CardImgselesai1} label="Sosial" title="Berkontribusi dalam Membangun Rumah Ibadah" dari="150.000.000" progress={100} terkumpul="150.000.000" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgselesai2} label="Sosial" title="Berbagi Kasih Untuk Yatim Piatu & Dhu'afa" dari="10.000.000" progress={100} terkumpul="10.000.000" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgselesai3} label="Kesehatan" title="Bantu Mudahkan Akses Kesehatan Masyarakat" dari="100.000.000" progress={100} terkumpul="100.000.000" LinkButton="/detailKesehatan" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgselesai4} label="Pendidikan" title="Bantu Anak Daerah Untuk Mendapatkan Pendidikan" dari="50.000.000" progress={100} terkumpul="50.000.000" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgselesai5} label="Bencana" title="Donasi Peduli dan Tanggap Bencana Gempa" dari="20.000.000" progress={100} terkumpul="20.000.000" LinkButton="/detailBencana" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgselesai6} label="Sosial" title="Mari Sumbangkan Teknologi Gerakan Sosial!" dari="100.000.000" progress={100} terkumpul="100.000.000" LinkButton="/detailSosial" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default selesai;

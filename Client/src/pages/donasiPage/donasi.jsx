import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
// import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";
import Banner from "../../components/Banner/Banner";

import styles from "./donasi.module.css";

import CardImg1 from "../../assets/images/kampanye1.png";
import CardImg2 from "../../assets/images/kampanye2.png";
import CardImg3 from "../../assets/images/kampanye3.png";
import CardImg4 from "../../assets/images/kampanye4.jpg";
import CardImg5 from "../../assets/images/kampanye5.png";
import CardImg6 from "../../assets/images/kampanye6.png";
import CardImg7 from "../../assets/images/kampanye7.png";
import CardImg8 from "../../assets/images/kampanye8.png";
import CardImg9 from "../../assets/images/kampanye9.jpg";
import CardImg10 from "../../assets/images/kampanye10.jpg";
import CardImg11 from "../../assets/images/kampanye11.jpg";
import CardImg12 from "../../assets/images/kampanye12.png";

const Donasi = () => {
  return (
    <div className={styles["body-donasi"]}>
      <div className={styles["landing-donasi-page"]}>
        {/* <LandingPageComponent /> */}
        <Banner />
      </div>

      <div className={styles["donasi-card-img"]}>
        <Container className="px-4">
          <Row>
            <FilterComponent />

            <Col>
              <Row className="gap-6">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg1} label="Pendidikan" title="Donasi Pendidikan Anak Yatim & Dhu'afa" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg2} label="Bencana" title="Pray For Gunung Semeru Lumajang" dari="50.000.000" progress={80} terkumpul="40.206.000" LinkButton="/detailBencana" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg3} label="Bencana" title="Peduli Bencana Erupsi & Banjir Lahar" dari="70.000.000" progress={0} terkumpul="0" LinkButton="/detailBencana" />
                </Col>
              </Row>
              <Row className="gap-6">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg4} label="Sosial" title="Meraih Syurga Bersama Anak Yatim & Dhu'afa" dari="10.000.000" progress={0} terkumpul="0" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg5} label="Sosial" title="Kumpulkan Sumbangan Untuk Panti Asuhan" dari="25.000.000" progress={85} terkumpul="10.000.000" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg6} label="Sosial" title="Berbagi Kasih Untuk Yatim Piatu & Dhu’afa" dari="10.000.000" progress={0} terkumpul="0" LinkButton="/detailSosial" />
                </Col>
              </Row>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg7} label="Bencana" title="Donasi Peduli dan Tanggap Bencana Gempa" dari="20.000.000" progress={75} terkumpul="20.000" LinkButton="/detailBencana" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg8} label="Pendidikan" title="Bantu Anak Daerah Untuk Mendapatkan Pendidikan" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailPendidikan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg9} label="Pendidikan" title="Bantu Pendidikan Masyarakat Kurang Mampu" dari="50.000.000" progress={20} terkumpul="10.611.123" LinkButton="/detailPendidikan" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg10} label="Kesehatan" title="Donasi Cepat Untuk Pasien ICU Keadaan Darurat" dari="100.000.000" progress={23} terkumpul="22.543.111" LinkButton="/detailKesehatan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg11} label="Kesehatan" title="Donasi Jaminan Kesehatan Untuk Dhu'afa" dari="100.000.000" progress={56} terkumpul="55.510.220" LinkButton="/detailKesehatan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImg12} label="Kesehatan" title="Bantu Mudahkan Akses Kesehatan Masyarakat" dari="100.000.000" progress={100} terkumpul="100.000.000" LinkButton="/detailKesehatan" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Donasi;

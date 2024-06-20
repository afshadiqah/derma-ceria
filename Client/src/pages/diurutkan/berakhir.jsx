import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./diurutkan.module.css";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgberakhir1 from "../../assets/images/berakhir1.jpg";
import CardImgberakhir2 from "../../assets/images/berakhir2.jpg";
import CardImgberakhir3 from "../../assets/images/berakhir3.png";
import CardImgberakhir4 from "../../assets/images/berakhir4.png";
import CardImgberakhir5 from "../../assets/images/berakhir5.jpg";
import CardImgberakhir6 from "../../assets/images/berakhir6.png";

const berakhir = () => {
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
                  <CardFilter imageSrc={CardImgberakhir1} label="Sosial" title="Berkontribusi dalam Membangun Rumah Ibadah" dari="100.000.000" progress={75} terkumpul="75.741.893" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgberakhir2} label="Sosial" title="Berdayakan Ratusan Perempuan Pencari Nafkah" dari="500.000.000" progress={88} terkumpul="444.870.966" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgberakhir3} label="Sosial" title="Sedekah Mukena Layak Tuk Puluhan Santriwati" dari="100.000.000" progress={60} terkumpul="60.650.786" LinkButton="/detailSosial" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgberakhir4} label="Bencana" title="Bersama Bantu Pulihkan Kehidupan Korban Bencana" dari="20.000.000" progress={80} terkumpul="15.000.000" LinkButton="/detailBencana" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgberakhir5} label="Teknologi" title="Donasi Laptop Untuk Remaja Milenial" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailTeknologi" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgberakhir6} label="Bencana" title="Peduli Bencana Erupsi dan Banjir Lahar" dari="70.000.000" progress={90} terkumpul="60.382.172" LinkButton="/detailBencana" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default berakhir;

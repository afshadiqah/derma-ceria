import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./diurutkan.module.css";

import CardFilter from "../../components/CardFilter/CardFilter";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardImgterbaru1 from "../../assets/images/terbaru1.png";
import CardImgterbaru2 from "../../assets/images/terbaru2.jpg";
import CardImgterbaru3 from "../../assets/images/terbaru3.png";
import CardImgterbaru4 from "../../assets/images/terbaru4.jpg";
import CardImgterbaru5 from "../../assets/images/terbaru5.jpg";
import CardImgterbaru6 from "../../assets/images/terbaru6.jpg";

const terbaru = () => {
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
                  <CardFilter imageSrc={CardImgterbaru1} label="Kesehatan" title="Bantu Anak Berkebutuhan Khusus Hidup Layak" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailKesehatan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgterbaru2} label="Bencana" title="Bantu Ribuan Warga yang Terdampak Banjir Lahar" dari="50.000.000" progress={30} terkumpul="15.546.876" LinkButton="/detailBencana" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgterbaru3} label="Bencana" title="Asap Tebal Kebakaran Hutan Kalbar!" dari="500.000.000" progress={0} terkumpul="249.546.876" LinkButton="/detailBencana" />
                </Col>
              </Row>

              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgterbaru4} label="Kesehatan" title="Anak dengan Penyakit Kronis Gagal Berobat" dari="116.650.000" progress={20} terkumpul="40.282.072" LinkButton="/detailKesehatan" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgterbaru5} label="Sosial" title="Gantikan 10.000 Mushaf Milik Santri yang Usang" dari="50.000.000" progress={10} terkumpul="5.000.000" LinkButton="/detailSosial" />
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <CardFilter imageSrc={CardImgterbaru6} label="Sosial" title="Bersama Berbagi Kebahagiaan di Hari Raya" dari="60.000.000" progress={0} terkumpul="5.000.000" LinkButton="/detailSosial" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default terbaru;

import React from "react";
import { Col, Nav, Row, Card, Container } from "react-bootstrap";
import Unduh from "../../../assets/icons/iconUnduh.svg";
import Lapdonasi1 from "../../../assets/images/lapDonasi1.png";
import Lapdonasi2 from "../../../assets/images/lapDonasi2.png";
import Lapdonasi3 from "../../../assets/images/lapDonasi3.png";
import Testimonial1 from "../../../assets/images/testimonial1.jpg";
import Testimonial2 from "../../../assets/images/testimonial2.jpg";
import Testimonial3 from "../../../assets/images/testimonial3.jpg";

import CardTransparansiDonatur from "../transparansiDonatur/cardTransparansiDonatur/cardTransparansiDonatur";
import styles from "./transparansiDonatur.module.css";

const TransparansiDonatur = () => {
  return (
    <Container className={styles.mainContent}>
      <h1 className={styles.dashboardTitle}>Laporan Donasi</h1>
      <Row className="gap-6 max-md:flex-col max-md:gap-0 justify-content-start">
        <Col xs={12} sm={6} md={4} className={styles.cardMarginBottom}>
          <CardTransparansiDonatur 
            imageSrc={Lapdonasi1}
            label="2023"
            title="Laporan Donasi bantuan lansia"
            unduh={
              <Nav.Link href={Lapdonasi1} download>
                <img src={Unduh} alt="Icon-unduh" />
                Unduh
              </Nav.Link>
            }
            kapasitas="pdf file (size 4761.1 kb)"
          />
        </Col>
        <Col xs={12} sm={6} md={4} className={styles.cardMarginBottom}>
          <CardTransparansiDonatur 
            imageSrc={Lapdonasi2}
            label="2023"
            title="Laporan Donasi bantuan Fasilitas"
            unduh={
              <Nav.Link href={Lapdonasi2} download>
                <img src={Unduh} alt="Icon-unduh" />
                Unduh
              </Nav.Link>
            }
            kapasitas="pdf file (size 4761.1 kb)"
          />
        </Col>
        <Col xs={12} sm={6} md={4} className={styles.cardMarginBottom}>
          <CardTransparansiDonatur 
            imageSrc={Lapdonasi3}
            label="2023"
            title="Laporan Donasi bantuan Kesehatan"
            unduh={
              <Nav.Link href={Lapdonasi3} download>
                <img src={Unduh} alt="Icon-unduh" />
                Unduh
              </Nav.Link>
            }
            kapasitas="pdf file (size 4761.1 kb)"
          />
        </Col>
      </Row>
      <h1 className={styles.dashboardTitle}>Dokumentasi</h1>
      <Row className={styles.testimonialRow}>
        <Col>
          <img src={Testimonial1} alt="Testimonial1" className={styles.imgTestimonial} />
        </Col>
        <Col>
          <Card className={styles.cardTestimonial}>
            Saya, sebagai penerima bantuan lansia, mengucapkan terima kasih tulus atas bantuan Anda. Semoga Tuhan memberkati setiap langkah Anda.
            <br /><br />
            <b>Ibu Suryati</b>
          </Card>
        </Col>
      </Row>
      <Row className={styles.testimonialRow}>
        <Col>
          <img src={Testimonial2} alt="Testimonial2" className={styles.imgTestimonial} />
        </Col>
        <Col>
          <Card className={styles.cardTestimonial}>
            Kami, penerima bantuan untuk operasi katarak, menyampaikan ucapan terima kasih yang tulus kepada Anda semua. Semoga menjadi berkah bagi banyak orang.
            <br /><br />
            <b>Bayu</b>
          </Card>
        </Col>
      </Row>
      <Row className={styles.testimonialRow}>
        <Col>
          <img src={Testimonial3} alt="Testimonial3" className={styles.imgTestimonial} />
        </Col>
        <Col>
          <Card className={styles.cardTestimonial}>
            Terima kasih atas kursi roda yang telah diberikan. Dengan ini, hidup kami menjadi lebih mudah dan lebih bermakna. Terima kasih atas kebaikan dan dukungan Anda.
            <br /><br />
            <b>Pak Sutejo</b>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TransparansiDonatur;

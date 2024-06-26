import React from "react";
import { Col, Nav, Row, Container } from "react-bootstrap";
import Unduh from "../../../assets/icons/iconUnduh.svg";
import Testimonial from "../transparansiDonatur/testimonial/testimonial";
import CardTransparansiDonatur from "../transparansiDonatur/cardTransparansiDonatur/cardTransparansiDonatur";
import styles from "./transparansiDonatur.module.css";

import useSwr from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const TransparansiDonatur = () => {
  const { data, error } = useSwr("http://localhost:5000/transparansi_donatur", fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Please Wait...</div>;

  return (
    <Container className={styles.mainContent}>
      <h1 className={styles.dashboardTitle}>Laporan Donasi</h1>
      <Row className="gap-6 max-md:flex-col max-md:gap-0 justify-content-start">
        {data?.map((transparansi_donatur) => (
          <Col key={transparansi_donatur.id_transparansi} xs={12} sm={6} md={4} className={styles.cardMarginBottom}>
            <CardTransparansiDonatur 
              imageSrc={transparansi_donatur.report_pic} 
              year={transparansi_donatur.year}
              title={transparansi_donatur.title_report}
              unduh={
                <Nav.Link href={transparansi_donatur.report_pic} download>
                  <img src={Unduh} alt="Icon-unduh" />
                  Unduh
                </Nav.Link>
              }
              kapasitas="pdf file (size 4761.1 kb)"
            />
          </Col>
        ))}
      </Row>
      <h1 className={styles.dashboardTitle}>Dokumentasi</h1>
      {data?.map((transparansi_donatur) => (
        <Testimonial
          key={transparansi_donatur.id_transparansi}
          imageSrctestimonial={transparansi_donatur.testimonial_pic} 
          text={transparansi_donatur.testimonial}
          name={transparansi_donatur.name}
        />
      ))}
    </Container>
  );
};

export default TransparansiDonatur;

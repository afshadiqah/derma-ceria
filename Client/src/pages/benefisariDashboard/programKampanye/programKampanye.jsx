import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlus } from 'react-icons/fa';
import CardProgramKampanye from "../programKampanye/CardProgramKampanye";
import TambahKampanye from "../programKampanye/TambahKampanye"; // Import komponen modal baru
import Search from "../../../assets/icons/search.svg"; // Update the import path


import CardImgberlangsung1 from "../../../assets/images/berlangsung1.png";
import CardImgberlangsung2 from "../../../assets/images/berlangsung2.jpg";
import CardImgberlangsung3 from "../../../assets/images/berlangsung3.png";
import CardImgberlangsung4 from "../../../assets/images/berlangsung4.png";
import CardImgberlangsung5 from "../../../assets/images/berlangsung5.jpg";
import CardImgberlangsung6 from "../../../assets/images/berlangsung6.jpg";

import styles from "./programKampanye.module.css";

const programKampanye = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => setShowModal(true);

  return (
    <div className={styles.mainContent}>
      <Container>
        <h1 className={styles.h1Title}>Program Kampanye</h1>
        <Row className="align-items-center mb-4">
          <Col>
            <h1 className={styles.h1SubTitle}>Kampanye Anda</h1>
          </Col>
          <Col>
            <div className={styles["input-container"]}>
            <img src={Search} alt="search" />
              <input type="text" placeholder="Search" className={`form-control mx-2 bg-light ${styles.searchInput}`} />
            </div>
          </Col>
        </Row>
        <Row className="gx-4 gy-4">
          <Col xs={12} sm={6} md={4} className={styles.cardMargin}>
            <CardProgramKampanye
              imageSrc={CardImgberlangsung1}
              label="Pendidikan"
              title="Donasi Pendidikan Anak Yatim & Dhu'afa"
              dari="50.000.000"
              progress={100}
              terkumpul="5.000.000"
              LinkButton="/detailPendidikan"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className={styles.cardMargin}>
            <CardProgramKampanye
              imageSrc={CardImgberlangsung2}
              label="Pendidikan"
              title="Berbagi Paket Pendidikan Untuk Masa Depan"
              dari="50.000.000"
              progress={0}
              terkumpul="10.000.000"
              LinkButton="/detailPendidikan"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className={styles.cardMargin}>
            <CardProgramKampanye
              imageSrc={CardImgberlangsung3}
              label="Bencana"
              title="Asap Tebal Kebakaran Hutan Kalbar!"
              dari="500.000.000"
              progress={70}
              terkumpul="249.546.876"
              LinkButton="/detailBencana"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className={styles.cardMargin}>
            <CardProgramKampanye
              imageSrc={CardImgberlangsung4}
              label="Sosial"
              title="Bantu Guru Pelosok Daerah dengan Sedekah Subuh"
              dari="50.000.000"
              progress={0}
              terkumpul="0"
              LinkButton="/detailSosial"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className={styles.cardMargin}>
            <CardProgramKampanye
              imageSrc={CardImgberlangsung5}
              label="Kesehatan"
              title="Bantu Anak dengan Kondisi Kronis Untuk Berobat"
              dari="116.650.000"
              progress={60}
              terkumpul="40.282.072"
              LinkButton="/detailKesehatan"
            />
          </Col>
          <Col xs={12} sm={6} md={4} className={styles.cardMargin}>
            <CardProgramKampanye
              imageSrc={CardImgberlangsung6}
              label="Pendidikan"
              title="Gantikan 10.000 Mushaf Untuk Siswa Pelosok"
              dari="20.000.000"
              progress={0}
              terkumpul="4.011.000"
              LinkButton="/detailPendidikan"
            />
          </Col>
        </Row>
        <Button variant="warning" className={styles.addButton} onClick={handleShow}>
          <FaPlus /> Tambahkan Kampanye
        </Button>
        <TambahKampanye showModal={showModal} handleClose={handleClose} />
      </Container>
    </div>
  );
};

export default programKampanye;

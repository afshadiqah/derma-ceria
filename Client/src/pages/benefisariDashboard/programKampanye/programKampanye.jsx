import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import useSWR from "swr";
import axios from "axios";
import CardProgramKampanye from "../programKampanye/CardProgramKampanye";
import TambahKampanye from "../programKampanye/TambahKampanye"; // Import komponen modal baru
import CustomPagination from "../../../components/Pagination/pagination"; // Import pagination component
import Search from "../../../assets/icons/search.svg"; // Update the import path

import styles from "./programKampanye.module.css";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const programKampanye = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => setShowModal(true);

  const { data, error } = useSWR("http://localhost:5000/kampanye", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // Filter the data based on id_user = 1
  const filteredData = data.filter((kampanye) => kampanye.id_user === 1);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentPageData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
        <Row>
          <div className={styles.buttonTambahProKam}>
            <Button variant="warning" className={styles.addButton} onClick={handleShow}>
              <FaPlus /> Tambahkan Kampanye
            </Button>
            <TambahKampanye showModal={showModal} handleClose={handleClose} />
          </div>
        </Row>
        <Row className="gx-4 gy-4">
          {currentPageData.map((kampanye) => (
            <Col xs={12} sm={6} md={4} className={styles.cardMargin} key={kampanye.id_kampanye}>
              <CardProgramKampanye
                imageSrc={kampanye.kampanye_pic_cover}
                label={kampanye.kampanye_kategori}
                title={kampanye.kampanye_title}
                dari={kampanye.target.toLocaleString("id-ID")}
                progress={(kampanye.terkumpul / kampanye.target) * 100}
                terkumpul={kampanye.terkumpul.toLocaleString("id-ID")}
                LinkButton={`/detail/${kampanye.id_kampanye}`} // Update the link button to navigate to the detail page with id_kampanye
              />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center mt-4">
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Row>
      </Container>
    </div>
  );
};

export default programKampanye;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import useAxios from "axios";
import useSWR from "swr";
import Banner from "../../components/Banner/Banner";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import CardFilter from "../../components/CardFilter/CardFilter";
import CustomPagination from "../../components/Pagination/pagination";
import styles from "./donasi.module.css";

const Donasi = () => {
  const fetcher = (url) => useAxios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR("http://localhost:5000/kampanye", fetcher);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  if (isLoading) {
    return <div>Please Wait...</div>;
  }
  if (error) {
    return <div>Error fetching data</div>;
  }

  // Calculate the indices of the items to be displayed
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <Banner />
      <div className={styles["donasi-card-img"]}>
        <Container className="px-4">
          <Row>
            <FilterComponent />
            <Col>
              <Row className={`gap-6 ${styles["card-container"]}`}>
                {currentItems &&
                  currentItems.map((kampanye) => (
                    <Col key={kampanye.id_kampanye} xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                      <CardFilter
                        imageSrc={kampanye.kampanye_pic}
                        kategori={kampanye.kampanye_kategori}
                        title={kampanye.kampanye_title}
                        target={kampanye.target}
                        terkumpul={kampanye.terkumpul}
                        LinkButton={`/detail/${kampanye.id_kampanye}`}
                      />
                    </Col>
                  ))}
              </Row>
              <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Donasi;

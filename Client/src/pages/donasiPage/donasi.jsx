import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import useAxios from "axios";
import useSWR from "swr";
import Banner from "../../components/Banner/Banner";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import CardFilter from "../../components/CardFilter/CardFilter";
import styles from "./donasi.module.css";

const Donasi = () => {
  const fetcher = (url) => useAxios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR("http://localhost:5000/kampanye", fetcher);
  console.log(data);
  if (isLoading) {
    return <div>Please Wait...</div>;
  }
  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <Banner />
      <div className={styles["donasi-card-img"]}>
        <Container className="px-4">
          <Row>
            <FilterComponent />
            <Col>
              <Row className="gap-6">
                {data &&
                  data.map((kampanye) => (
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Donasi;

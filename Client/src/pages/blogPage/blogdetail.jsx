import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./blog.module.css";
import Blogdetail from "../../assets/images/blogdetail.jpg";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

const blogdetail = () => {
  return (
    <div className="bg-white">
      <div className="detail-event-landing" style={{ position: "relative", minHeight: "100vh" }}>
        {/* Komponen Landing Page */}
        <LandingPageComponent />
      </div>
      <div className={styles["content-container"]}>
        <Row>
          <h2 className={styles["title"]}>5 Tujuan Donasi dan Manfaatnya</h2>
          <p className={styles["date-category"]}>DermaCeria | Donasi | 12 FEBRUARI 2024</p>
          <Col md={6}>
            <img src={Blogdetail} alt="blog-pic" className={styles["blog-pic"]} />
          </Col>
          <Col md={6}>
            <p className={`${styles["blog-content"]} mb-5`}>
              Donasi adalah tindakan pemberian sukarela yang bertujuan untuk membantu individu, kelompok, atau lembaga yang membutuhkan. Tindakan ini merupakan wujud nyata kepedulian sosial dan empati terhadap sesama. Donasi memiliki tujuan
              yang bervariasi dan manfaatnya pun melibatkan banyak aspek. Tujuannya adalah membantu mereka yang membutuhkan, mendukung Penelitian dan pengembangan, Kemanusian Ditengah Bencana, Mendukung pengembangan Komunitas, Melindungi
              Lingkungan dan manfaatnya adalah Meringankan penderitaan, Mendorong perubahan sosial, Menginspirasi tindakan Lain, Menghubungkan manusia dan Membangun kepuasan batin.
             </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default blogdetail;

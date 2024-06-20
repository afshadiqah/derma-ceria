import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./blog.module.css";
import CardBlog from "../../components/CardBlog/CardBlog";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardBlog3 from "../../assets/images/blog1.jpg";
import CardBlog2 from "../../assets/images/blog2.jpg";
import CardBlog1 from "../../assets/images/blog3.jpg";

const Blog = () => {
  return (
    <div className={styles["body-blog"]}>
      <div className={styles["landing-donasi-page"]}>
        <LandingPageComponent />
      </div>

      <div className={styles.BlogCard}>
        <Container>
          <Row className="gap-6 max-md:flex-col max-md:gap-0">
            <Col>
              <CardBlog
                imageSrc={CardBlog1}
                label="DermaCeria | 08 Maret 2024"
                text="Tidak hanya dengan berdonasi dalam berbentuk uang,tetapi bersama Dermaceria dapat berdonasi dengan berupa donasi barang secara sukarela dan DermaCeria sudah terbukti terpercaya"
                LinkButton="/blogdetail"
              />
            </Col>
            <Col>
              <CardBlog
                imageSrc={CardBlog2}
                label="DermaCeria | 08 Maret 2024"
                text="Tips agar dapat berdonasi secara rutin maka luangkan waktumu dengan mempedulikan masyarakat yang membutuhkan dan kiranya tanamkan bahwa pentingnya berdonatur secara rutin."
                LinkButton="/blogdetail"
              />
            </Col>
            <Col>
              <CardBlog
                imageSrc={CardBlog3}
                label="DermaCeria | 08 Maret 2024"
                text="Bersama dengan DermaCeria membantu adik yang kurang mampu dalam perekonomian dengan tubuh yang sedang sakit dan membutuhkan uluran tangan sedikit donasi anda berarti untuk membantu pengobatan"
                LinkButton="/blogdetail"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blog;

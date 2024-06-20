import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import styles from "../Banner/Banner.module.css";

import Landing1 from "../../assets/images/banner2.png";
import Landing2 from "../../assets/images/bannerlanding1.png";
import Landing3 from "../../assets/images/banner1.png";

const Banner = () => {
  const images = [Landing1, Landing2, Landing3]; // Add dynamic image URLs here

  return (
    <div>
      <Carousel className="carousel-container" interval={3000} indicators={false}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div className={styles.banner1} style={{ backgroundImage: `url(${image})` }}>
              {image === Landing1 && (
                <Row>
                  <Col>
                    <div className="banner-left">
                    <h1>Peduli Sesama, Wujudkan Kebaikan Nyata</h1>
                    <p>Ulurkan tangan Anda untuk membantu mereka yang membutuhkan. Donasi Anda, sekecil apapun, akan memberikan makna dan harapan bagi kehidupan mereka.</p>
                    </div>
                  </Col>
                  <Col>
                    <div className="banner-right"></div>
                  </Col>
                </Row>
              )}
              {image === Landing2 && (
                <Row>
                  <Col>
                    <div className="banner-left" style={{ textAlign: "center", marginTop: "10rem" }}>
                      <h1 style={{ textAlign: "center" }}>Ayo Mulai Berdonasi!</h1>
                      <p style={{ textAlign: "center" }}>Berikan senyuman bahagia untuk mereka yang membutuhkan!</p>
                    </div>
                  </Col>
                </Row>
              )}
              {image === Landing3 && (
                <Row>
                  <Col>
                    <div className="banner-left">
                      <h1>
                        Pintu Menuju <br />
                        Kebahagiaan
                      </h1>
                      <p>
                        Donasi adalah kilatan cahaya di tengah kegelapan, sebuah pelukan hangat dalam dinginnya dunia. Dengan memberi, kita menghidupkan percikan harapan, memperkuat jalinan kemanusiaan, dan membawa keajaiban bagi mereka
                        yang membutuhkan.
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="banner-right"></div>
                  </Col>
                </Row>
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

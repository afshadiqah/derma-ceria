import React from "react";
import { Carousel } from "react-bootstrap";

import Landing1 from "../../assets/images/banner2.png";
import Landing2 from "../../assets/images/bannerlanding1.png";
import Landing3 from "../../assets/images/banner1.png";

import styles from "./LandingPage.module.css";

import "../../index.css";

const LandingPageComponent = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel className={styles.carousel} interval={5000} indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={Landing3} alt="First slide" />
          <Carousel.Caption className={styles.captionLandingLeft}>
            <h1>Pintu Menuju <br />Kebahagiaan</h1>
            <p>Donasi adalah kilatan cahaya di tengah kegelapan, sebuah pelukan hangat dalam dinginnya dunia. Dengan memberi, kita menghidupkan percikan harapan, memperkuat jalinan kemanusiaan, dan membawa keajaiban bagi mereka yang membutuhkan.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Landing2} alt="Second slide" />
          <Carousel.Caption className={styles.captionLandingLeft1}>
            <h1>Ayo Mulai Berdonasi!</h1>
            <p>Berikan senyuman bahagia untuk mereka yang membutuhkan!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Landing1} alt="Third slide" />
          <Carousel.Caption className={styles.captionLandingLeft2}>
            <h1>Peduli Sesama <br />  Wujudkan Kebaikan <br /> Nyata</h1>
            <p>Ulurkan tangan Anda untuk membantu mereka yang membutuhkan. Donasi Anda, sekecil apapun, akan memberikan makna dan harapan bagi kehidupan mereka.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Landing2} alt="Second slide" />
          <Carousel.Caption className={styles.captionLandingLeft1}>
            <h1>Ayo Mulai Berdonasi!</h1>
            <p>Berikan senyuman bahagia untuk mereka yang membutuhkan!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LandingPageComponent;

import React from "react";
import { Row, Col } from "react-bootstrap";

import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";
import EventDetailCard from "../../components/EventDetailCard/EventDetailCard";
import styles from "./event.module.css";

import Kaos from "../../assets/images/kaos.jpg";

const eventdetail = () => {
  return (
    <div className="bg-white">
      <div className="detail-event-landing" style={{ position: "relative", minHeight: "100vh" }}>
        {/* Komponen Landing Page */}
        <LandingPageComponent />
      </div>

      <div>
        <Row>
          <Col md={6} className={`DescriptionContainer ${styles["DescriptionContainer"]}`}>
            <h4>Deskripsi</h4>
            <p>
              Kami mengadalan sebuah event yang menjadi sebuah kegiatan positif dan diselingi dengan memberikan donasi tunai dan kegiatan tersebut dinamai “Sport Event”. Guna dibuatnya kegiatan tersebut untu membantu masayarakat yang dimana
              hasil pendaftaran tersebut akan dialihkan untuk dana membantu anak kanker. Saat ini, kita semua memiliki kesempatan untuk memberikan dukungan yang sangat dibutuhkan kepada mereka. Dengan mengikuti kegiatan ini dan biaya yang
              dipungut hanya berupa pedaftaran.Event ini tepatnya dilaksanakan dijakarta. Ayo, mari bersama-sama memberikan dukungan dengan cara yang mudah dan bermakna.
            </p>
          </Col>
          <Col md={4}>
            <EventDetailCard className={styles["Containerdetail"]} eventName="Sport" date="Sabtu, 16 Mei 2024" time="09.00 - 12.00" location="Stadion" benefit="Kaos" imageSrc={Kaos} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default eventdetail;

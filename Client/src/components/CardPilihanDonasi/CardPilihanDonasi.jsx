import React, { useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

import CardNoFilter from "../CardNoFilter/CardNoFiler";
import styles from "./CardPilihanDonasi.module.css";

import CardImg1 from "../../assets/images/kampanye1.png";
import CardImg2 from "../../assets/images/kampanye2.png";
import CardImg3 from "../../assets/images/kampanye3.png";
import CardImg4 from "../../assets/images/kampanye4.jpg";
import CardImg5 from "../../assets/images/kampanye5.png";
import CardImg6 from "../../assets/images/kampanye6.png";
import CardImg7 from "../../assets/images/kampanye7.png";
import CardImg8 from "../../assets/images/kampanye8.png";
import CardImg9 from "../../assets/images/kampanye9.jpg";
import CardImg10 from "../../assets/images/kampanye10.jpg";
import CardImg11 from "../../assets/images/kampanye11.jpg";
import CardImg12 from "../../assets/images/kampanye12.png";

const cardData = [
  { imageSrc: CardImg1, label: "Pendidikan", title: "Donasi Pendidikan Anak Yatim & Dhu'afa", dari: "50.000.000", progress: 10, terkumpul: "5.000.000", LinkButton: "/detailPendidikan" },
  { imageSrc: CardImg2, label: "Bencana", title: "Pray For Gunung Semeru Lumajang", dari: "50.000.000", progress: 80, terkumpul: "40.206.000", LinkButton: "/detailBencana" },
  { imageSrc: CardImg3, label: "Bencana", title: "Peduli Bencana Erupsi & Banjir Lahar", dari: "70.000.000", progress: 0, terkumpul: "0", LinkButton: "/detailBencana" },
  { imageSrc: CardImg4, label: "Sosial", title: "Meraih Syurga Bersama Anak Yatim & Dhu'afa", dari: "10.000.000", progress: 0, terkumpul: "0", LinkButton: "/detailSosial" },
  { imageSrc: CardImg5, label: "Sosial", title: "Kumpulkan Sumbangan Untuk Panti Asuhan", dari: "25.000.000", progress: 85, terkumpul: "10.000.000", LinkButton: "/detailSosial" },
  { imageSrc: CardImg6, label: "Sosial", title: "Berbagi Kasih Untuk Yatim Piatu & Dhu’afa", dari: "10.000.000", progress: 0, terkumpul: "0", LinkButton: "/detailSosial" },
  { imageSrc: CardImg7, label: "Bencana", title: "Donasi Peduli dan Tanggap Bencana Gempa", dari: "20.000.000", progress: 75, terkumpul: "20.000", LinkButton: "/detailBencana" },
  { imageSrc: CardImg8, label: "Pendidikan", title: "Bantu Anak Daerah Untuk Mendapatkan Pendidikan", dari: "50.000.000", progress: 10, terkumpul: "5.000.000", LinkButton: "/detailPendidikan" },
  { imageSrc: CardImg9, label: "Pendidikan", title: "Bantu Pendidikan Masyarakat Kurang Mampu", dari: "50.000.000", progress: 20, terkumpul: "10.611.123", LinkButton: "/detailPendidikan" },
  { imageSrc: CardImg10, label: "Kesehatan", title: "Donasi Cepat Untuk Pasien ICU Keadaan Darurat", dari: "100.000.000", progress: 23, terkumpul: "22.543.111", LinkButton: "/detailKesehatan" },
  { imageSrc: CardImg11, label: "Kesehatan", title: "Donasi Jaminan Kesehatan Untuk Dhu'afa", dari: "100.000.000", progress: 56, terkumpul: "55.510.220", LinkButton: "/detailKesehatan" },
  { imageSrc: CardImg12, label: "Kesehatan", title: "Bantu Mudahkan Akses Kesehatan Masyarakat", dari: "100.000.000", progress: 100, terkumpul: "100.000.000", LinkButton: "/detailKesehatan" },
];

const chunkArray = (array, chunkSize) => {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
};

const CardPilihanDonasi = () => {
  const [index, setIndex] = useState(0);
  const cardChunks = chunkArray(cardData, 4); // Ubah chunk size menjadi 3

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.bodyDonasiPilihan}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        indicators={false}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      >
        {cardChunks.map((chunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <Row>
              {chunk.map((card, cardIndex) => (
                <Col key={cardIndex} xs={12} sm={6} md={3} className="mb-4"> {/* Ubah ukuran kolom menjadi md={4} */}
                  <div className={styles.smallCard}>
                    <CardNoFilter
                      imageSrc={card.imageSrc}
                      label={card.label}
                      title={card.title}
                      dari={card.dari}
                      progress={card.progress}
                      terkumpul={card.terkumpul}
                      LinkButton={card.LinkButton}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CardPilihanDonasi;

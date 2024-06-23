import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardPilihanDonasi from "../../components/CardPilihanDonasi/CardPilihanDonasi";
import CardDetailDonasi from "../../components/CardDetailDonasi/CardDetailDonasi";
import axios from "axios";
import useSWR from "swr";
import styles from "./detailDonasi.module.css";
import CardBerdonasiUang from "../../components/CardBerdonasi/CardBerdonasiUang";
import CardBerdonasiBarang from "../../components/CardBerdonasi/CardBerdonasiBarang";

import Profile1 from "../../assets/images/profile1.png";
import Profile2 from "../../assets/images/profile2.png";
import Profile3 from "../../assets/images/profile3.png";
import Profile4 from "../../assets/images/profile4.png";
import Profile5 from "../../assets/images/profile5.png";
import Profile6 from "../../assets/images/profile6.png";

const kampanyedetail = () => {
  const { id } = useParams();

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`http://localhost:5000/kampanye/${id}`, fetcher);

  if (!data) {
    return <div>Please Wait...</div>;
  }
  if (error) {
    return <div>Error loading donation details</div>;
  }

  const kampanyeDetail = data[0]; // Mengambil detail donasi pertama (asumsi hanya ada satu detail donasi untuk setiap id)

  return (
    <div className={styles["body-donasi"]}>
      <Container>
        <Row>
          <Col lg={7}>
            <CardDetailDonasi
              title={kampanyeDetail.kampanye_title}
              imageTitle={kampanyeDetail.kampanye_pic_cover}
              text1={kampanyeDetail.kampanye_desc}
              imageSrcDetail={kampanyeDetail.kampanye_pic_deskripsi}
            />
          </Col>
          <Col>
            <Row>
              <CardBerdonasiUang
                terkumpul={kampanyeDetail.terkumpul}
                target={kampanyeDetail.target}
                donasi="70"
                dibagikan="175"
                hari="30"
                buttonDonasi="/payDonasiUang"
                buttonShare="/SosialMedia"
                rincianpenggunaandana
                titleProfile
                imageProfile={Profile1}
                jumlahUang="Rp. 2.000.000"
                namaPenerima="Oleh Juleha"
                waktu="2 Hari yang lalu"
                imageProfile2={Profile2}
                jumlahUang2="Rp. 1.500.000"
                namaPenerima2="Oleh AGUS TIRROREJO"
                waktu2="2 Hari yang lalu"
                imageProfile3={Profile3}
                jumlahUang3="Rp. 500.000"
                namaPenerima3="Oleh Siti Aisyah"
                waktu3="Baru Saja"
              />
            </Row>
            <Row>
              <CardBerdonasiBarang
                title=""
                donasi="56"
                dibagikan="75"
                hari="12"
                buttonDonasi="/payDonasiBarang"
                buttonShare="/SosialMedia"
                rincianpenggunaandana
                titleProfile
                imageProfile={Profile4}
                jumlahUang="Pakaian"
                namaPenerima="Oleh Kamarudin"
                waktu="1 hari yang lalu"
                imageProfile2={Profile5}
                jumlahUang2="Makanan"
                namaPenerima2="Oleh Jujun Junaedi"
                waktu2="Baru Saja"
                imageProfile3={Profile6}
                jumlahUang3="Al-Quran"
                namaPenerima3="Oleh Sutejo"
                waktu3="Baru Saja"
              />
            </Row>
          </Col>
        </Row>
        

        <Row>
          <h4 style={{ fontWeight: "bold" }}>Beragam Donasi Lainnya</h4>
          <CardPilihanDonasi />
        </Row>
      </Container>
    </div>
  );
};

export default kampanyedetail;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import DetailGambar from "../../assets/images/detailBencana.png";
import GambarBencana from "../../assets/images/detailbenc1.png";
import Profile1 from "../../assets/images/profile1.png";
import Profile2 from "../../assets/images/profile2.png";
import Profile3 from "../../assets/images/profile3.png";
import Profile4 from "../../assets/images/profile4.png";
import Profile5 from "../../assets/images/profile5.png";
import Profile6 from "../../assets/images/profile6.png";
import CardDetailDonasi from "../../components/CardDetailDonasi/CardDetailDonasi";

import styles from "./detailDonasi.module.css";
import CardBerdonasiUang from "../../components/CardBerdonasi/CardBerdonasiUang";
import CardBerdonasiBarang from "../../components/CardBerdonasi/CardBerdonasiBarang";
import CardPilihanDonasi from "../../components/CardPilihanDonasi/CardPilihanDonasi";

const detailBencana = () => {
  return (
    <div className={styles["body-donasi"]}>
      <Container>
        <Row>
          <Col lg={7}>
            <CardDetailDonasi
              title="Donasi Peduli dan Tanggap Bencana Gempa"
              imageTitle={GambarBencana}
              text1="Gempa berkekuatan 5,6 magnitudo mengguncang Kabupaten Cianjur, Jawa Barat. Guncangan gempa ini terasa hingga ke wilayah Jakarta dan sekitarnya."
              text2="Setidaknya dalam bencana ini dikabarkan 268 jiwa meninggal dunia, 1.083 lainnya luka-luka, 58.362 jiwa mengungsi di beberapa titik, dan 22.198 unit bangunan infrastruktur seperti rumah warga, tempat ibadah, sekolah, jembatan, rumah sakit, dan fasilitas umum lainnya mengalami kerusakan."
              imageSrcDetail={DetailGambar}
              text4="Dewan panasehat Supandi SE.sewaktu didatangi di kediamannya mengatakan kami sangat berharap seluruh pengurus Gibas cinta damai. masyarakat. elemen pemerintahan.ikut berpartisipasi membantu meringankan beban saudara-saudara kita yang tertimpah musibah yang ada di kabupaten cianjur"
              text5="Mari kita doakan para penyintas gempa agar mereka diberikan kesabaran dalam menghadapi bencana gempa yang terjadi, dan kita semua dapat berkontribusi menolong penyintas dengan memberikan donasi terbaik."
              text6="Insaallah pada hari Senin ini hasil Pengalangan dana Peduli bencana alam ormas Gibas Cinta damai sektor batujaya nantinya dana yang terkumpul akan di kirim keposko di cianjur untuk dibagikan ke masyarakat yang tertimpa musibah, semoga semua apa yang kita jalankan ini menjadi amal ibadah, semoga segala bencana yang datang menjadikan kita semua mengingat akan betapa maha kuasanya Allah Swt.

              Mari Berdonasi Sekarang !"
            />
          </Col>
          <Col>
            <Row>
              <CardBerdonasiUang
                title=""
                danaterkumpul="Rp. 20.000.000"
                progress={30}
                target="Rp. 70.000.000"
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

export default detailBencana;

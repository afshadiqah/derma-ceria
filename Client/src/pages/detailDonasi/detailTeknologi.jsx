import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import DetailGambar from "../../assets/images/detailTeknologi.jpg";
import GambarTeknologi from "../../assets/images/detailtekno1.png";
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

const detailTeknologi = () => {
  return (
    <div className={styles["body-donasi"]}>
      <Container>
        <Row>
          <Col lg={7}>
            <CardDetailDonasi
              title="Donasi Dukungan Teknologi"
              imageTitle={GambarTeknologi}
              text1="Di era digital ini, akses terhadap teknologi dan pendidikan berbasis inovasi menjadi kunci untuk meningkatkan kualitas hidup dan masa depan anak-anak remaja, terutama mereka yang berasal dari keluarga marginal. Program donasi laptop bertujuan untuk menyediakan alat dan sumber daya yang diperlukan agar anak-anak remaja marginal di Indonesia dapat belajar dan berkembang dalam bidang inovasi dan teknologi. Dengan dukungan Anda, mereka dapat meraih kesempatan yang lebih baik untuk masa depan yang cerah."
              text2="Anak-anak remaja dari keluarga marginal sering kali tidak memiliki akses ke perangkat teknologi yang memadai, menghambat mereka untuk belajar dan berkembang di bidang yang sangat penting ini. Dengan memiliki laptop, mereka dapat mengakses sumber daya pendidikan online, mengikuti kursus teknologi, dan mengembangkan keterampilan yang relevan dengan kebutuhan dunia kerja saat ini. Donasi laptop Anda akan membuka pintu menuju berbagai peluang yang sebelumnya tidak dapat mereka jangkau."
              imageSrcDetail={DetailGambar}
              text4="Pengelolaan donasi dilakukan dengan penuh tanggung jawab dan transparansi. Kami berkomitmen untuk menyediakan laporan penggunaan dana dan distribusi laptop secara berkala kepada para donatur. Setiap laptop yang didonasikan akan dilengkapi dengan perangkat lunak edukatif dan antivirus, memastikan bahwa anak-anak remaja dapat langsung memanfaatkannya untuk belajar. Audit independen juga dilakukan untuk memastikan integritas program dan memberikan ketenangan pikiran kepada para donatur."
              text5="Kami mengajak Anda untuk berdonasi dan membantu anak-anak remaja marginal Indonesia mendapatkan akses ke teknologi dan pendidikan inovatif. Dengan berdonasi laptop, Anda tidak hanya memberikan alat belajar, tetapi juga harapan dan kesempatan untuk masa depan yang lebih baik. Setiap kontribusi, sekecil apapun, sangat berarti dan dapat mengubah hidup seorang anak remaja. Mari bersama-sama kita berikan mereka kesempatan untuk belajar, berinovasi, dan meraih impian mereka.  "
              text6="Donasi laptop Anda akan membawa dampak positif yang berkelanjutan. Anak-anak remaja yang mendapatkan akses ke teknologi akan memiliki peluang lebih besar untuk sukses di bidang akademis dan profesional. Mereka dapat mengembangkan keterampilan yang dibutuhkan di dunia kerja masa depan, seperti pemrograman, desain grafis, dan teknik digital lainnya. Selain itu, program ini juga akan membantu mengurangi kesenjangan digital dan memberdayakan generasi muda untuk berkontribusi secara positif bagi masyarakat dan negara. Bersama, kita dapat menciptakan perubahan nyata dan memberikan masa depan yang lebih baik bagi anak-anak remaja marginal di Indonesia.

              Mari Berdonasi Sekarang !"
            />
          </Col>
          <Col>
            <Row >
              <CardBerdonasiUang
                title=""
                danaterkumpul="Rp. 5.000.000"
                progress={10}
                target="50.000.000"
                donasi="165"
                dibagikan="233"
                hari="12"
                buttonDonasi="/payDonasiUang"
                buttonShare="/SosialMedia"
                rincianpenggunaandana
                titleProfile
                imageProfile={Profile1}
                jumlahUang="Rp. 2.000.000"
                namaPenerima="Oleh Juleha"
                waktu="2 Hari yang lalu"
                imageProfile2={Profile2}
                jumlahUang2="Rp. 1.000.000"
                namaPenerima2="Oleh AGUS TIRROREJO"
                waktu2="2 Hari yang lalu"
                imageProfile3={Profile3}
                jumlahUang3="Rp. 500.000"
                namaPenerima3="Oleh Siti Aisyah"
                waktu3="2 Hari yang lalu"
              />
              
            </Row>
            <Row>
            <CardBerdonasiBarang
                title=""
                donasi="165"
                dibagikan="233"
                hari="12"
                buttonDonasi="/payDonasiBarang"
                buttonShare="/SosialMedia"
                rincianpenggunaandana
                titleProfile
                imageProfile={Profile4}
                jumlahUang="Mousepad"
                namaPenerima="Oleh Kamarudin"
                waktu="1 hari yang lalu"
                imageProfile2={Profile5}
                jumlahUang2="Laptop"
                namaPenerima2="Oleh Jujun Junaedi"
                waktu2="Baru Saja"
                imageProfile3={Profile6}
                jumlahUang3="Mouse"
                namaPenerima3="Oleh Sutejo"
                waktu3="Baru Saja"
              />
            </Row>
          </Col>
        </Row>
        <Row>
          <h4 style={{ fontWeight: "bold" }}>Beragam Donasi Lainnya</h4>
          <CardPilihanDonasi/>
        </Row>
      </Container>
    </div>
  );
};

export default detailTeknologi;

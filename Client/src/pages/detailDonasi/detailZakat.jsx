import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col} from "react-bootstrap";
import DetailGambar from "../../assets/images/detailZakat.jpg";
import GambarZakat from "../../assets/images/detailzakat1.png";
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

const detailZakat = () => {
  return (
    <div className={styles["body-donasi"]}>
      <Container>
        <Row>
          <Col lg={7}>
            <CardDetailDonasi
              title="Donasi  Menunaikan Kewajiban Zakat"
              imageTitle={GambarZakat}
              text1="Yayasan Qobul Insan adalah lembaga amal yang berdedikasi untuk meningkatkan kesejahteraan masyarakat melalui berbagai program sosial dan keagamaan. Berdiri dengan landasan kuat pada prinsip-prinsip keislaman, yayasan ini berkomitmen untuk membantu mereka yang kurang beruntung, baik melalui pemberian zakat, infak, maupun sedekah. Dengan jaringan relawan yang luas dan program-program yang terstruktur, Yayasan Qobul Insan berupaya menjadi jembatan antara para donatur dengan mereka yang membutuhkan."
              text2="Dalam bidang pendidikan, Yayasan Qobul Insan memberikan beasiswa kepada anak-anak dari keluarga kurang mampu untuk melanjutkan pendidikan mereka. Selain itu, yayasan ini juga mendirikan sekolah-sekolah dan pusat pelatihan yang memberikan keterampilan praktis kepada generasi muda. Program kesehatan yayasan meliputi bantuan pengobatan bagi keluarga yang tidak mampu, penyuluhan kesehatan, serta pelayanan kesehatan gratis di daerah terpencil."
              imageSrcDetail={DetailGambar}
              text4=" Zakat merupakan salah satu rukun Islam yang wajib ditunaikan oleh setiap muslim yang mampu. Melalui zakat, kita dapat membantu meringankan beban saudara-saudara kita yang kurang beruntung. Yayasan Qobul Insan menyediakan sarana yang terpercaya dan efektif untuk menyalurkan zakat Anda. Dengan menyalurkan zakat melalui yayasan ini, Anda dapat memastikan bahwa dana yang Anda sumbangkan akan sampai kepada yang benar-benar membutuhkan."
              text5="Bersama Yayasan Qobul Insan, zakat Anda tidak hanya menjadi amal jariyah yang berpahala besar, tetapi juga menjadi alat untuk mengubah kehidupan orang lain. Setiap rupiah yang Anda berikan akan digunakan untuk program-program yang memberikan dampak nyata dan berkelanjutan. Tidak hanya membantu memenuhi kebutuhan dasar, tetapi juga membangun kemandirian dan kesejahteraan jangka panjang."
              text6="Mari kita wujudkan kebahagiaan bersama dengan menunaikan zakat melalui Yayasan Qobul Insan. Dengan berzakat, kita tidak hanya membersihkan harta dan jiwa, tetapi juga berkontribusi dalam menciptakan masyarakat yang lebih adil dan sejahtera. Berzakatlah dengan hati yang ikhlas, dan lihatlah bagaimana kebaikan itu mengalir dan mengubah dunia di sekitar kita.

              Mari Berdonasi Sekarang !"
            />
          </Col>
          <Col>
            <Row >
              <CardBerdonasiUang
                title=""
                danaterkumpul="Rp. 150.000.000"
                progress={100}
                target="150.000.000"
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
                jumlahUang="Sembako"
                namaPenerima="Oleh Kamarudin"
                waktu="1 hari yang lalu"
                imageProfile2={Profile5}
                jumlahUang2="Beras"
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
          <CardPilihanDonasi/>
        </Row>
      </Container>
    </div>
  );
};

export default detailZakat;

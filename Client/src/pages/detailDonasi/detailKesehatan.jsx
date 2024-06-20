import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import DetailGambar from "../../assets/images/detailKesehatan.jpg";
import GambarKesehatan from "../../assets/images/sehat4.jpg";
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

const detailKesehatan = () => {
  return (
    <div className={styles["body-donasi"]}>
      <Container>
        <Row>
          <Col lg={7}>
          <CardDetailDonasi
              title="Donasi Darurat Kesehatan"
              imageTitle={GambarKesehatan}
              text1="Ketika seseorang masuk ke Unit Perawatan Intensif (ICU), mereka berada dalam kondisi kritis yang memerlukan perawatan medis intensif dan biaya yang sangat tinggi. Pasien ICU seringkali membutuhkan peralatan medis khusus, obat-obatan mahal, dan penanganan oleh tenaga medis yang berpengalaman. Bantuan dan dukungan dari masyarakat sangat diperlukan untuk meringankan beban finansial yang dihadapi oleh keluarga pasien."
              text2="Pasien dalam keadaan darurat di ICU sering kali memerlukan intervensi medis segera untuk menyelamatkan nyawa mereka. Keadaan ini mencakup kondisi seperti serangan jantung, cedera parah, infeksi berat, atau komplikasi penyakit kronis. Biaya perawatan di ICU sangat mahal dan seringkali tidak sepenuhnya ditanggung oleh asuransi kesehatan, membuat keluarga pasien berada dalam situasi yang sangat sulit. Donasi dari masyarakat dapat memberikan bantuan yang sangat berarti dalam situasi kritis ini."
              text3="Kami mengajak seluruh masyarakat untuk berdonasi guna membantu pasien ICU yang sedang dalam kondisi darurat."
              imageSrcDetail={DetailGambar}
              text4="Kami berkomitmen untuk mengelola setiap donasi dengan penuh transparansi dan akuntabilitas. Laporan penggunaan dana akan dipublikasikan secara berkala kepada para donatur dan masyarakat luas. Dana yang terkumpul akan digunakan secara langsung untuk menutupi biaya perawatan pasien ICU, termasuk biaya obat-obatan, peralatan medis, dan layanan medis lainnya. Kami juga akan bekerja sama dengan rumah sakit untuk memastikan bantuan disalurkan secara efektif."
              text5=" Kami mengajak seluruh lapisan masyarakat untuk berdonasi dan memberikan bantuan bagi pasien ICU yang sedang dalam keadaan darurat. Dengan berdonasi, Anda turut menyelamatkan nyawa dan memberikan harapan kepada mereka yang sedang berjuang dalam kondisi kritis. Bantuan Anda, sekecil apapun, sangat berarti dan dapat membuat perbedaan besar bagi keluarga yang sedang menghadapi masa-masa sulit ini."
              text6="Setiap donasi yang Anda berikan akan membawa dampak positif yang nyata. Selain membantu menutupi biaya perawatan medis yang mahal, donasi Anda juga memberikan dukungan moral bagi keluarga pasien. Melalui kebersamaan dan gotong royong, kita dapat membantu sesama dalam menghadapi situasi darurat. Mari kita wujudkan rasa kepedulian dan solidaritas dengan berdonasi untuk pasien ICU yang sedang berjuang untuk hidup mereka. Bersama, kita bisa memberikan harapan dan kesempatan kedua bagi mereka.

              Mari Berdonasi Sekarang !"
            />
          </Col>
          <Col>
            <Row >
              <CardBerdonasiUang
                title=""
                danaterkumpul="Rp. 22.543.111"
                progress={23}
                target="Rp. 100.000.000"
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
                jumlahUang="Pakaian"
                namaPenerima="Oleh Kamarudin"
                waktu="1 hari yang lalu"
                imageProfile2={Profile5}
                jumlahUang2="Makanan"
                namaPenerima2="Oleh Jujun Junaedi"
                waktu2="Baru Saja"
                imageProfile3={Profile6}
                jumlahUang3="Tabung Oksigen"
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

export default detailKesehatan;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import DetailGambar from "../../assets/images/detailSosial.jpg";
import GambarSosial from "../../assets/images/detailsos1.png";
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

const detailSosial = () => {
  return (
    <div className={styles["body-donasi"]}>
      <Container>
        <Row>
          <Col lg={7}>
            <CardDetailDonasi
              title="Donasi Sosial Kemanusiaan"
              imageTitle={GambarSosial}
              text1="Dalam dunia yang penuh dengan tantangan dan ketidakpastian, banyak individu dan komunitas yang memerlukan bantuan mendesak. Program donasi sosial kemanusiaan bertujuan untuk meringankan penderitaan mereka yang terdampak oleh bencana alam, kemiskinan, konflik, dan berbagai kondisi darurat lainnya. Dengan berkontribusi, Anda turut serta dalam misi mulia untuk menciptakan dunia yang lebih baik dan penuh empati."
              text2="Banyak saudara kita yang saat ini hidup dalam kondisi yang sangat memprihatinkan. Mereka membutuhkan bantuan dalam bentuk makanan, pakaian, tempat tinggal, pendidikan, dan layanan kesehatan. Donasi Anda dapat memberikan mereka akses ke kebutuhan dasar ini, serta memberikan harapan baru untuk masa depan yang lebih cerah. Setiap rupiah yang Anda sumbangkan dapat membuat perbedaan besar dalam kehidupan mereka yang kurang beruntung."
              text3="Penggalangan dana untuk sosial kemanusiaan dilakukan melalui berbagai saluran yang mudah diakses, termasuk transfer bank, donasi online, dan pengumpulan dana langsung di berbagai acara dan kegiatan komunitas."
              imageSrcDetail={DetailGambar}
              text4=" Setiap donasi yang kami terima akan dikelola dengan penuh tanggung jawab. Kami berkomitmen untuk menyediakan laporan penggunaan dana secara berkala yang dapat diakses oleh semua donatur. Hal ini dilakukan untuk memastikan bahwa dana yang terkumpul benar-benar digunakan untuk membantu mereka yang membutuhkan. Audit independen juga dilakukan secara rutin untuk menjaga integritas program ini dan kepercayaan para donatur."
              text5="Kami mengajak seluruh masyarakat untuk berdonasi demi kemanusiaan. Dengan berdonasi, Anda menunjukkan solidaritas dan kepedulian terhadap sesama. Setiap kontribusi, sekecil apapun, sangat berarti bagi mereka yang sedang dalam kesulitan. Bersama, kita bisa menciptakan perubahan positif dan memberikan harapan baru kepada mereka yang membutuhkan. Mari bersama-sama wujudkan dunia yang lebih adil dan berperikemanusiaan melalui donasi Anda."
              text6="Donasi Anda tidak hanya memberikan bantuan materiil, tetapi juga memberikan dukungan moral dan harapan kepada mereka yang berada dalam situasi sulit. Melalui bantuan Anda, banyak nyawa dapat diselamatkan, dan kualitas hidup banyak orang dapat ditingkatkan. Kita dapat membangun komunitas yang lebih kuat dan tangguh, di mana setiap orang memiliki kesempatan untuk hidup layak. Bergabunglah dengan kami dalam gerakan kemanusiaan ini, dan jadilah bagian dari perubahan positif yang nyata di dunia ini.

              Mari Berdonasi Sekarang !"
            />
          </Col>
          <Col>
            <Row >
              <CardBerdonasiUang
                title=""
                danaterkumpul="Rp. 0"
                progress={0}
                target="10.000.000"
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

export default detailSosial;

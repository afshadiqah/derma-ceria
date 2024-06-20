import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col} from "react-bootstrap";
import DetailGambar from "../../assets/images/detailQurban.jpg";
import GambarQurban from "../../assets/images/detailqurban1.png";
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

const detailQurban = () => {
  return (
    <div className={styles["body-donasi"]}>
      <Container>
        <Row>
          <Col lg={7}>
            <CardDetailDonasi
              title="Donasi Patungan Qurban"
              imageTitle={GambarQurban}
              text1=" Yayasan Islam Al Huda adalah lembaga nirlaba yang berkomitmen untuk meningkatkan kesejahteraan masyarakat melalui pendidikan, dakwah, dan kegiatan sosial. Didirikan dengan tujuan utama untuk menyebarkan nilai-nilai Islam yang rahmatan lil alamin, Yayasan Al Huda aktif dalam berbagai program yang mendukung pendidikan, kesejahteraan sosial, dan pembangunan komunitas."
              text2="Yayasan Islam Al Huda memiliki berbagai program sosial dan keagamaan yang dirancang untuk membantu mereka yang membutuhkan. Mulai dari pendidikan anak-anak yatim dan dhuafa, penyediaan bantuan sembako, hingga kegiatan dakwah dan kajian Islam, yayasan ini bekerja tanpa lelah untuk meningkatkan kualitas hidup masyarakat. Salah satu program utama adalah kegiatan qurban, di mana yayasan berperan sebagai jembatan antara para donatur dan penerima manfaat."
              text3="Kepercayaan adalah fondasi dari setiap kegiatan di Yayasan Islam Al Huda. Setiap donasi yang diterima dikelola dengan penuh tanggung jawab dan transparansi karena laporan keuangan dan dokumentasi kegiatan secara rutin dipublikasikan."
              imageSrcDetail={DetailGambar}
              text4="Idul Adha adalah momen istimewa untuk berbagi dan menunjukkan kepedulian kita terhadap sesama. Yayasan Islam Al Huda mengajak Anda untuk menunaikan ibadah qurban di yayasan kami. Dengan berqurban di Yayasan Al Huda, Anda tidak hanya menjalankan perintah agama, tetapi juga membantu meringankan beban saudara-saudara kita yang membutuhkan. Daging qurban yang Anda sumbangkan akan disalurkan kepada keluarga-keluarga yang benar-benar memerlukannya, membawa kebahagiaan di hari yang suci ini."
              text5=" Yayasan Islam Al Huda menyediakan kemudahan bagi Anda dalam menunaikan ibadah qurban. Proses pemilihan hewan, penyembelihan, dan distribusi daging dilakukan dengan standar syariat yang ketat dan penuh amanah. Anda dapat mempercayakan qurban Anda kepada kami dengan tenang, karena kami berkomitmen untuk menjalankan amanah ini dengan sebaik-baiknya. Setiap langkah dari proses qurban akan diinformasikan kepada Anda, sehingga Anda dapat melihat langsung dampak dari qurban yang Anda tunaikan."
              text6=" Jangan lewatkan kesempatan untuk berqurban di Yayasan Islam Al Huda dan menjadi bagian dari gerakan kebaikan ini. Dengan berqurban, Anda dapat membawa kebahagiaan di hari raya Idul Adha kepada mereka yang kurang beruntung. Mari bersama-sama kita wujudkan kebahagiaan dan keberkahan dengan berbagi daging qurban. Tunaikan qurban Anda di Yayasan Islam Al Huda sekarang juga, dan rasakan nikmatnya berbagi serta mendapatkan keberkahan dari Allah SWT. 

              Mari Berdonasi Sekarang !"
            />
          </Col>
          <Col>
            <Row >
              <CardBerdonasiUang
                title=""
                danaterkumpul="Rp. 150.000.000"
                progress={100}
                target="Rp. 150.000.000"
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
          <CardPilihanDonasi />
        </Row>
      </Container>
    </div>
  );
};

export default detailQurban;

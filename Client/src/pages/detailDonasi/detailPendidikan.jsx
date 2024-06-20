import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import DetailGambar from "../../assets/images/detailPendidikan.png";
import GambarPendidikan from "../../assets/images/detailpend1.jpeg";
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

const detailPendidikan = () => {
  return (
    <div className={styles["body-donasi"]}>
      <Container>
        <Row>
          <Col lg={7}>
            <CardDetailDonasi
              title="Donasi Pendidikan Anak Yatim"
              imageTitle={GambarPendidikan}
              text1="  Membangun Masa Depan Bersama Yayasan Cahaya Ilahi: Yayasan Cahaya Ilahi adalah tempat yang menjadi jembatan harapan bagi anak-anak yatim dan dhuafa untuk meraih pendidikan yang layak. Kami berkomitmen untuk memberikan akses pendidikan berkualitas kepada mereka yang membutuhkan, sehingga mereka dapat tumbuh dan berkembang menjadi individu yang mandiri dan berdaya."
              text2="  Pendampingan Setiap Langkah: Di Yayasan Cahaya Ilahi, kami tidak hanya menyediakan layanan pendidikan, tetapi juga memberikan pendampingan secara pribadi kepada setiap anak. Setiap langkah mereka dalam perjalanan pendidikan mereka didukung dengan penuh kasih sayang dan perhatian, sehingga mereka merasa didengar, dihargai, dan didukung sepenuhnya."
              text3="Investasi dalam Potensi Anak Bangsa: Donasi Anda tidak hanya menjadi sumbangan, tetapi juga merupakan investasi dalam potensi anak bangsa. Dengan memberikan akses pendidikan yang berkualitas kepada anak-anak yatim dan dhuafa, kita membantu membangun masa depan bangsa yang lebih cerah dan berdaya saing."
              imageSrcDetail={DetailGambar}
              text4=" Berikan Mereka Kunci Keberhasilan: Pendidikan adalah kunci keberhasilan dalam hidup. Dengan berdonasi kepada Yayasan Cahaya Ilahi, Anda memberikan mereka kunci untuk membuka pintu menuju masa depan yang lebih baik. Setiap sumbangan Anda adalah langkah penting dalam memberikan kesempatan belajar kepada anak-anak yang membutuhkan."
              text5=" Satu Donasi, Banyak Impian Terwujud: Satu donasi kecil dari Anda dapat membuat banyak impian terwujud. Bersama-sama, kita bisa menciptakan perbedaan yang nyata dalam hidup anak-anak yatim dan dhuafa. Mari bergabung dalam misi kami untuk memberikan pendidikan yang layak bagi mereka. Bersama, kita bisa membangun masa depan yang lebih baik untuk generasi mendatang."
              text6=" Dampak yang Luas, Hasil yang Langgeng: Donasi Anda memiliki dampak jangka panjang yang melampaui batas waktu dan ruang. Ketika Anda berdonasi untuk pendidikan anak yatim dan dhuafa di Yayasan Cahaya Ilahi, Anda memberikan investasi yang akan terus berbuah dalam bentuk perubahan positif yang berkelanjutan dalam kehidupan mereka. Bersama-sama, mari kita terus bekerja keras untuk membuka pintu kesempatan bagi mereka yang membutuhkan, sehingga kita dapat menciptakan dunia yang lebih baik untuk semua. 

              Mari Berdonasi Sekarang !"
            />
          </Col>
          <Col>
            <Row>
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
                title
                donasi="65"
                dibagikan="73"
                hari="10"
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
          <h4 className={styles["pilihandonasi"]}>Beragam Donasi Lainnya</h4>
          <CardPilihanDonasi />
        </Row>
      </Container>
    </div>
  );
};

export default detailPendidikan;

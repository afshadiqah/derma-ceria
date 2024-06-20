import { Container, Row, Col, Card, ProgressBar, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Pendidikan from "../../assets/icons/pendidikan.png";
import Kesehatan from "../../assets/icons/kesehatan.png";
import Bencana from "../../assets/icons/bencana.png";
import Teknologi from "../../assets/icons/teknologi.png";
import Sosial from "../../assets/icons/sosial.png";
import BrandPeduli1 from "../../assets/images/brandpeduli1.png";
import BrandPeduli2 from "../../assets/images/brandpeduli2.png";
import BrandPeduli3 from "../../assets/images/brandpeduli3.png";
import BrandPeduli4 from "../../assets/images/brandpeduli4.png";
import SubGambar from "../../assets/images/homepage.jpeg";
import Cardrec1 from "../../assets/images/homepage1.jpeg";
import Cardrec2 from "../../assets/images/homepage2.jpeg";
import Cardrec3 from "../../assets/images/homepage3.jpeg";
import Cardrec4 from "../../assets/images/homepage4.jpeg";
import Cardrec5 from "../../assets/images/homepage5.jpeg";
import Cardrec6 from "../../assets/images/homepage6.jpeg";

import Banner from "../../components/Banner/Banner.jsx";
import DonationCard from "../../components/CardRecomendation/DonationCard";

import styles from "./homepage.module.css";
import "../../index.css";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent.jsx";

const homepage = () => {
  return (
    <div className="body">
      {/* Banner */}
      {/* <Banner /> */}
      <LandingPageComponent/>
      {/* Banner */}

      {/* Pilih Kategori Donasi */}
      <div className={styles.kategoriDonasi}>
        <div className={styles.containerKategoriDonasi}>
          <Card className={styles.cardCategory}>
            <div className={`${styles.title} px-4 `}>Pilih Kategori Donasi</div>
            <Row>
              <Col>
                <div className={`${styles.itemCategory} text-center mt-3`}>
                  <a href="/pendidikan" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                    <img src={Pendidikan} alt="icon pendidikan" style={{ maxWidth: "120px" }} />
                    <p className="size-desc-category mt-4 mb-0">Pendidikan</p>
                  </a>
                </div>
              </Col>
              <Col>
                <div className={`${styles.itemCategory} text-center mt-3`}>
                  <a href="/kesehatan" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                    <img src={Kesehatan} alt="icon Kesehatan" style={{ maxWidth: "120px" }} />
                    <p className="size-desc-category mt-4 mb-0">Kesehatan</p>
                  </a>
                </div>
              </Col>
              <Col>
                <div className={`${styles.itemCategory} text-center mt-3`}>
                  <a href="/bencana" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                    <img src={Bencana} alt="icon Bencana" style={{ maxWidth: "120px" }} />
                    <p className="size-desc-category mt-4 mb-0">Bencana Alam</p>
                  </a>
                </div>
              </Col>
              <Col>
                <div className={`${styles.itemCategory} text-center mt-3`}>
                  <a href="/teknologi" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                    <img src={Teknologi} alt="icon Teknologi" style={{ maxWidth: "120px" }} />
                    <p className="size-desc-category mt-4 mb-0">Teknologi</p>
                  </a>
                </div>
              </Col>
              <Col>
                <div className={`${styles.itemCategory} text-center mt-3`}>
                  <a href="/sosial" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                    <img src={Sosial} alt="icon Sosial" style={{ maxWidth: "120px" }} />
                    <p className="size-desc-category mt-4 mb-0">Sosial</p>
                  </a>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </div>

      {/* end Pilih Kategori Donasi */}

      {/* card rekomendasi */}

      <div className={styles.containerCardRec}>
        <div className={styles.title}>Rekomendasi Penggalangan Dana</div>
        <Carousel className={styles.carousell} interval={3000} indicators={false}>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} md={4}>
                <DonationCard imageSrc={Cardrec1} label={"Sosial"} title="Bantuan untuk anak Indonesia!" target="9.900.000" progress={30} amount="33.000.000" LinkButton={"/sosial"} />
              </Col>
              <Col xs={12} md={4}>
                <DonationCard imageSrc={Cardrec2} label={"Bencana"} title="Donasi Korban Banjir" target="37.500.000" progress={75} amount="50.000.000" LinkButton={"/bencana"} />
              </Col>
              <Col xs={12} md={4}>
                <DonationCard imageSrc={Cardrec3} label={"Bencana"} title="Donasi Korban Gempa Bumi" target="90.000.000" progress={90} amount="100.000.000" LinkButton={"/bencana"} />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} md={4}>
                <DonationCard label={"Bencana"} imageSrc={Cardrec4} title="Donasi Korban Erupsi" target="52.000.000" progress={65} amount="80.000.000" linkButton={"/"} />
              </Col>
              <Col xs={12} md={4}>
                <DonationCard label={"Sosial"} imageSrc={Cardrec5} title="Donasi Untuk Palestina" target="90.000.000" progress={75} amount="120.000.000" linkButton={"/"} />
              </Col>
              <Col xs={12} md={4}>
                <DonationCard label={"Sosial"} imageSrc={Cardrec6} title="Donasi Pembebasan Lahan" target="40.000.000" progress={40} amount="100.000.000" linkButton={"/"} />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* end card Rekomendasi */}

      {/* Banner ke-2 */}

      <div className={styles.containerBanner2}>
        <div className={styles.banner2}>
          <div className="csks"></div>
          <Row>
            <Col className={styles.imageBanner2}>
              <img src={SubGambar} alt="subgambar" style={{ maxWidth: "70%", borderRadius: "10px" }} />
            </Col>
            <Col>
              <Row>
                <h1>Komunitas Peduli sosial</h1>
                <p>Sekelompok individu yang berkomitmen untuk memperbaiki kondisi sosial, ekonomi, dan lingkungan di sekitarnya melalui berbagai kegiatan salah satunya adalah dengan berdonasi.</p>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      {/* Banner ke-2 */}

      {/* card pilihanDermaCeria */}

      <div className={styles.containerCardPilihan}>
        <div className={styles.titleDesc}>
          <div className={`${styles.title} `}>Pilihan DermaCeria</div>
          <p>Berdonasi bukan hanya tentang memberi uang, tetapi juga tentang memberikan harapan dan kebaikan kepada mereka yang membutuhkan.</p>
        </div>
        <Carousel className={styles.carousell} interval={3000} indicators={false}>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} md={4}>
                <DonationCard imageSrc={Cardrec1} label={"Sosial"} title="Bantuan untuk anak Indonesia!" target="9.900.000" progress={30} amount="33.000.000" LinkButton={"/sosial"} />
              </Col>
              <Col xs={12} md={4}>
                <DonationCard imageSrc={Cardrec2} label={"Bencana"} title="Donasi Korban Banjir" target="37.500.000" progress={75} amount="50.000.000" LinkButton={"/bencana"} />
              </Col>
              <Col xs={12} md={4}>
                <DonationCard imageSrc={Cardrec3} label={"Bencana"} title="Donasi Korban Gempa Bumi" target="90.000.000" progress={90} amount="100.000.000" LinkButton={"/bencana"} />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} md={4}>
                <DonationCard label={"Bencana"} imageSrc={Cardrec4} title="Donasi Korban Erupsi" target="52.000.000" progress={65} amount="80.000.000" linkButton={"/"} />
              </Col>
              <Col xs={12} md={4}>
                <DonationCard label={"Sosial"} imageSrc={Cardrec5} title="Donasi Untuk Palestina" target="90.000.000" progress={75} amount="120.000.000" linkButton={"/"} />
              </Col>
              <Col xs={12} md={4}>
                <DonationCard label={"Sosial"} imageSrc={Cardrec6} title="Donasi Pembebasan Lahan" target="40.000.000" progress={40} amount="100.000.000" linkButton={"/"} />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* end card pilihan */}

      {/* Banner ke-3 */}

      <div className={styles.banner3}>
        <Row>
          <Col>
            <h1>5000</h1>
            <p>Donasi</p>
          </Col>
          <Col>
            <h1>110</h1>
            <p>Sukarelawan</p>
          </Col>
          <Col>
            <h1>654</h1>
            <p>Produk</p>
          </Col>
          <Col>
            <h1>1311</h1>
            <p>Lembaga</p>
          </Col>
        </Row>
      </div>

      {/* Banner ke-2 */}

      {/* #BrandPeduli */}

      <div className={styles.containerBrandPeduli}>
        <Card className={styles.cardBrandPeduli}>
          <div className={`${styles.title} text-center `}>#BrandPeduli</div>
          <Row className="mx-0">
            <Col>
              <div className="text-center mt-3">
                <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                  <img src={BrandPeduli1} alt="icon brandpeduli1" style={{ maxWidth: "120px" }} />
                  <p className={`${styles.titleBrandPeduli}`}>BAZNAS</p>
                </a>
              </div>
            </Col>
            <Col>
              <div className="text-center mt-3">
                <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                  <img src={BrandPeduli2} alt="brandpeduli2" style={{ maxWidth: "120px" }} />
                  <p className={`${styles.titleBrandPeduli}`}>JNE Express</p>
                </a>
              </div>
            </Col>
            <Col>
              <div className="text-center mt-3">
                <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                  <img src={BrandPeduli3} alt="brandpeduli3" style={{ maxWidth: "120px" }} />
                  <p className={`${styles.titleBrandPeduli}`}>Bank BRI</p>
                </a>
              </div>
            </Col>
            <Col>
              <div className="text-center mt-3">
                <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                  <img src={BrandPeduli4} alt="brandpeduli4" style={{ maxWidth: "120px" }} />
                  <p className={`${styles.titleBrandPeduli}`}>Metro Data</p>
                </a>
              </div>
            </Col>
          </Row>
        </Card>
      </div>

      {/* end #BrandPeduli */}
    </div>
  );
};
export default homepage;

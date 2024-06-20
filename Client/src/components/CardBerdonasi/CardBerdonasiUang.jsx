import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, ProgressBar, Nav } from "react-bootstrap";

import Boxcoin from "../../assets/icons/boxCoin.png";
import Shareicon from "../../assets/icons/share.svg";
import styles from "./CardBerdonasi.module.css";
import ProfileComponent from "../../components/ProfileComponent";
import ShareSocialMedia from "../../components/ShareSocialMedia/ShareSocialMedia"; // Import komponen ShareSocialMedia

const CardBerdonasiUang = ({ 
  title, 
  danaterkumpul, 
  progress, 
  target, 
  donasi, 
  dibagikan, 
  hari, 
  buttonDonasi, 
  buttonShare, 
  rincianpenggunaandana, 
  imageProfile, 
  titleProfile, 
  jumlahUang, 
  namaPenerima, 
  waktu, 
  semuadonasi, 
  imageProfile2, 
  titleProfile2, 
  jumlahUang2, 
  namaPenerima2, 
  waktu2, 
  semuadonasi2, 
  imageProfile3, 
  titleProfile3, 
  jumlahUang3, 
  namaPenerima3, 
  waktu3, 
  semuadonasi3 
}) => {
  const [showShareModal, setShowShareModal] = useState(false); // State untuk modal

  const handleShareClick = () => {
    setShowShareModal(true); // Tampilkan modal ketika tombol dibagikan diklik
  };

  const handleCloseShareModal = () => {
    setShowShareModal(false); // Tutup modal
  };

  return (
    <div className={styles.bodyCardBerdonasi}>
      <Card className={styles.CardBerdonasi}>
        <Card.Header>
          <div className={styles.titleCard}>
            <Card.Text>{title} Dana Terkumpul</Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <div className={styles.Danaterkumpul}>
            <Card.Text>{danaterkumpul}</Card.Text>
          </div>
          <div className={styles.progressBar}>
            <ProgressBar animated now={progress} variant="warning" style={{ width: "100%", height: "10px" }} />
          </div>
          <div className={styles.amount}>
            <Card.Text>dari Target =&gt; Rp. {target}</Card.Text>
          </div>
          <div className={styles.textCard}>
            <Card.Text>
              {donasi}
              <br />
              Donasi
            </Card.Text>
            <Card.Text>
              {dibagikan}
              <br />
              Dibagikan
            </Card.Text>
            <Card.Text>
              {hari}
              <br />
              Hari
            </Card.Text>
          </div>

          <div className={styles.ButtonDonasi}>
            <Link to={buttonDonasi} className={`btn btn-warning ${styles.btnbuttonDonasi}`}>
              Donasi
              <img src={Boxcoin} alt="icon box" className={`me-2 img-fluid ${styles.iconBoxcoin}`} />
            </Link>
          </div>
          <div className={styles.ButtonShare}>
            <button onClick={handleShareClick} className={`btn btn-outline-secondary ${styles.btnbuttonShare}`}>
              Dibagikan
              <img src={Shareicon} alt="icon share" className={`me-2 img-fluid ${styles.iconShare}`} />
            </button>
          </div>
          <div className={styles.customRow}>
            <Card className={styles.cardStyle}>
              <ProfileComponent />
              <hr className={styles.hrStyle} />
              <Link to={rincianpenggunaandana} className={styles.linkStyle}>
                Rincian Penggunaan Dana
              </Link>
            </Card>
          </div>
          <div className={styles.titleProfile}>
            <Card.Text>{titleProfile} Rincian Donasi</Card.Text>
          </div>

          <div className={styles.donationCardProfile}>
            <div className={styles.imageCard}>
              <Card.Img src={imageProfile} />
            </div>
            <div className={styles.textContainer}>
              <Card.Title className={styles.jumlahUang}>{jumlahUang}</Card.Title>
              <Card.Title className={styles.namaPenerima}>{namaPenerima}</Card.Title>
            </div>
            <div className={styles.textWaktu}>
              <Card.Title className={styles.waktu}>{waktu}</Card.Title>
            </div>
          </div>

          <div className={styles.donationCardProfile}>
            <div className={styles.imageCard}>
              <Card.Img src={imageProfile2} />
            </div>
            <div className={styles.textContainer}>
              <Card.Title className={styles.jumlahUang}>{jumlahUang2}</Card.Title>
              <Card.Title className={styles.namaPenerima}>{namaPenerima2}</Card.Title>
            </div>
            <div className={styles.textWaktu}>
              <Card.Title className={styles.waktu}>{waktu2}</Card.Title>
            </div>
          </div>
          <div className={styles.donationCardProfile}>
            <div className={styles.imageCard}>
              <Card.Img src={imageProfile3} />
            </div>
            <div className={styles.textContainer}>
              <Card.Title className={styles.jumlahUang}>{jumlahUang3}</Card.Title>
              <Card.Title className={styles.namaPenerima}>{namaPenerima3}</Card.Title>
            </div>
            <div className={styles.textWaktu}>
              <Card.Title className={styles.waktu}>{waktu3}</Card.Title>
            </div>
          </div>
          <div>
            <hr className={styles.hrStyle} />
            <Nav.Link to={semuadonasi} className={styles.linkStyle}>
              Lihat semua Donasi
            </Nav.Link>
          </div>
        </Card.Body>
      </Card>
      <ShareSocialMedia 
        showShareModal={showShareModal} 
        handleCloseShareModal={handleCloseShareModal} 
        shareUrl={window.location.href} 
        shareText={`Lihat bukti pembayaran saya di ${window.location.href}`} 
      />
    </div>
  );
};

export default CardBerdonasiUang;

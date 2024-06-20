import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./PopUpPemilihanBarang.module.css"; 
import videoSrc from "../../assets/icons/success.mp4";
import BuktiPembayaranBarang from '../../components/ModalBuktiPembayaran/BuktiPembayaranBarang'; // pastikan path ini sesuai

const SuccessModalBarang = ({ showSuccessModal, handleSuccessClose, formData, donationAmount, serviceFee, selectedPaymentMethod, selectedProduct }) => {
  const [showBuktiModal, setShowBuktiModal] = useState(false);

  const handleBuktiClick = () => {
    setShowBuktiModal(true);
  };

  return (
    <>
      <Modal show={showSuccessModal} onHide={handleSuccessClose} dialogClassName={styles.customModal}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.titlesuccess}>Selamat!</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.successModal}>
          <video autoPlay width="100%">
            <source src={videoSrc} type="video/mp4" className={styles.videosuccessModal} />
            Donasi gagal!
          </video>
          <p className={styles.pstyle}>Donasi Berhasil!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.buttonstyle} variant="warning" onClick={handleBuktiClick}>
            Bukti Donasi
          </Button>
        </Modal.Footer>
      </Modal>

      <BuktiPembayaranBarang
        showBuktiModal={showBuktiModal}
        handleBuktiModalClose={() => setShowBuktiModal(false)}
        formData={{ ...formData, paymentMethod: selectedPaymentMethod, product: selectedProduct }}
        donationAmount={donationAmount}
        serviceFee={serviceFee}
      />
    </>
  );
};

export default SuccessModalBarang;

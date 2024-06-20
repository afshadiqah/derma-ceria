import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./BuktiPembayaran.module.css";
import BuktiImg from "../../assets/icons/correct.png";

const BuktiPembayaranBarang = ({ showBuktiModal, handleBuktiModalClose, formData, donationAmount, serviceFee, description, quantity, PaymentMethod }) => {
  const referenceNumber = formData?.referenceNumber || "123456789";
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const paymentMethod = formData?.selectPaymentMe || "";
  const name = formData?.name || "";
  const isAnonymous = formData?.isAnonymous || false;
  const phone = formData?.phone || "";

  const totalAmount = parseInt(donationAmount) + parseInt(serviceFee);

  const formatName = (name) => {
    if (name.length <= 2) return name;
    return `${name.charAt(0)}****${name.charAt(name.length - 1)}`;
  };

  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <Modal show={showBuktiModal} onHide={handleBuktiModalClose} dialogClassName={styles.customModal}>
      <Modal.Header>
        <div className={styles.titleContainer}>
          <h5 className={styles.titlebukti}>Bukti Pembayaran</h5>
          <img src={BuktiImg} alt="Image" className={styles.image} />
          <p className={styles.pstyletotal}>
            <b>Rp. {formatCurrency(totalAmount)}</b>
          </p>
        </div>
      </Modal.Header>
      <Modal.Body className={styles.buktiModal}>
        <div className={styles.row}>
          <div className={styles.label}>Nomor Referensi</div>
          <div className={styles.value}>{referenceNumber}</div>
        </div>       
        <div className={styles.row}>
          <div className={styles.label}>Tanggal</div>
          <div className={styles.value}>{date}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>Waktu</div>
          <div className={styles.value}>{time}</div>
        </div>
        <hr />
        <div className={styles.row}>
          <div className={styles.label}>Keterangan Barang</div>
          <div className={styles.value}>{description}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>Jumlah Barang</div>
          <div className={styles.value}>{quantity}</div>
        </div>
        {/* <div className={styles.row}>
          <div className={styles.label}>Metode Pembayaran</div>
          <div className={styles.value}>{paymentMethod}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>Nama</div>
          <div className={styles.value}>{isAnonymous ? formatName(name) : name}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.label}>No Telepon</div>
          <div className={styles.value}>{phone}</div>
        </div> */}
      </Modal.Body>
      <Modal.Footer>
        <Button href="/donasi" className={styles.buttonstyle} variant="warning" onClick={handleBuktiModalClose}>
          Kembali
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BuktiPembayaranBarang;

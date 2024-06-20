import React, { useState } from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../index.css";
import styles from "./paymentDonasi.module.css";
import ModalBarang from "../../components/PopUpPemilihanBarang/ModalBarang";
import ModalPembayaranUang from "../../components/PopUpPemilihanPembayaranUang/ModalPembayaranUang";
import SuccessModal from "../../components/PopUpPemilihanPembayaranUang/SuccessModal";
import BuktiPembayaran from "../../components/ModalBuktiPembayaran/BuktiPembayaran";

const PayDonasiBarang = () => {
  const [showBarangModal, setShowBarangModal] = useState(false);
  const [showPembayaranModal, setShowPembayaranModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showBuktiModal, setShowBuktiModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    isAnonymous: false,
  });

  const serviceFee = 2500;

  const handleShowBarangModal = (productType) => {
    setSelectedProduct({ type: productType });
    setShowBarangModal(true);
  };

  const handleCloseBarangModal = () => setShowBarangModal(false);

  const handleShowPembayaranModal = () => setShowPembayaranModal(true);
  const handleClosePembayaranModal = () => setShowPembayaranModal(false);

  const handleShowSuccessModal = () => setShowSuccessModal(true);
  const handleCloseSuccessModal = () => setShowSuccessModal(false);

  const handleShowBuktiModal = () => setShowBuktiModal(true);
  const handleCloseBuktiModal = () => setShowBuktiModal(false);

  const handleNextFromBarang = (productDetails) => {
    setSelectedProduct({ ...selectedProduct, ...productDetails });
    setShowBarangModal(false);
    setShowPembayaranModal(true);
  };

  const handleSuccess = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
    setShowPembayaranModal(false);
    setShowSuccessModal(true);
  };

  const handleBuktiModalOpen = () => {
    setShowSuccessModal(false);
    setShowBuktiModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles["body-payment-donasi"]}>
      <div className={styles["title-donasiBarang"]}>
        <h2>Donasi Barang</h2>
      </div>
      <div className={styles["container-donasiBarang"]}>
        <div className={styles["container-donasiBarang-left"]}>
          <div className={styles["title-form"]}>
            <h3>Data Diri</h3>
          </div>
          <div className={styles["form"]}>
            <div className={styles["buttonAnonym"]}>
              <MDBSwitch
                className="mdb-switch"
                defaultChecked
                id="flexSwitchCheckChecked"
                label="Sembunyikan Nama Saya (Anonim)"
                onChange={() => setFormData({ ...formData, isAnonymous: !formData.isAnonymous })}
              />
            </div>
            <Form className={`${styles["form-donasiBarang"]} mb-3`}>
              <Form.Group className={`${styles["form-group-donasiBarang"]} my-4`} controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Nama Lengkap"
                  name="name"
                  onChange={handleInputChange}
                  value={formData.name}
                />
              </Form.Group>
              <Form.Group className={`${styles["form-group-donasiUang"]} my-4`} controlId="formBasicPhone">
                <Form.Control
                  type="phone"
                  placeholder="No. Telepon"
                  name="phone"
                  onChange={handleInputChange}
                  value={formData.phone}
                />
              </Form.Group>
              <Form.Group className={`${styles["form-group-donasiUang"]} my-4`} controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email (Opsional)"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </Form.Group>
              <Form.Group className={`${styles["form-group-donasiUang"]} my-4`} controlId="formBasicMessage">
                <Form.Control
                  as="textarea"
                  placeholder="Pesan (Opsional)"
                  style={{ height: "5rem" }}
                  name="message"
                  onChange={handleInputChange}
                  value={formData.message}
                />
              </Form.Group>
            </Form>
          </div>
        </div>

        <div className={styles["container-donasiBarang-right"]}>
          <div className={styles["title-Pembayaran"]}>
            <h3>Pilih Jenis Donasi</h3>
          </div>
          <div>
            <Button className={styles["button-donasi"]} onClick={() => handleShowBarangModal("Makanan")}>
              Makanan
            </Button>
            <Button className={styles["button-donasi"]} onClick={() => handleShowBarangModal("Pakaian")}>
              Pakaian
            </Button>
            <Button className={styles["button-donasi"]} onClick={() => handleShowBarangModal("Barang")}>
              Barang Lain
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Barang */}
      <ModalBarang
        showBarangModal={showBarangModal}
        handleClose={handleCloseBarangModal}
        handleNext={handleNextFromBarang}
        selectedProduct={selectedProduct}
      />

      {/* Modal Pembayaran Uang */}
      <ModalPembayaranUang
        showModal={showPembayaranModal}
        handleClose={handleClosePembayaranModal}
        donationAmount={donationAmount}
        serviceFee={serviceFee}
        onSuccess={handleSuccess}
      />

      {/* Modal Sukses */}
      <SuccessModal
        showSuccessModal={showSuccessModal}
        handleSuccessClose={handleBuktiModalOpen}
      />

      {/* Modal Bukti Pembayaran */}
      <BuktiPembayaran
        showBuktiModal={showBuktiModal}
        handleBuktiModalClose={handleCloseBuktiModal}
        formData={selectedProduct}
        donationAmount={donationAmount}
        serviceFee={serviceFee}
        paymentMethod={selectedPaymentMethod} 
      />
    </div>
  );
};

export default PayDonasiBarang;

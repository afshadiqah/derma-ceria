import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from './PopUpPemilihanBarang.module.css';

import Sicepat from '../../assets/logos/sicepat.png';
import JNE from '../../assets/logos/jne.png';
import JNT from '../../assets/logos/jnt.png';
import ModalPembayaranBarang from '../../components/PopUpPemilihanBarang/ModalPembayaranBarang';

const ModalBarang = ({ showBarangModal, handleClose, selectedProduct }) => {
  const [productDetails, setProductDetails] = useState({
    description: "",
    quantity: "",
    weight: "",
    photo: null,
    serviceFee: 0,
  });

  const [selectedService, setSelectedService] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    setProductDetails({
      description: "",
      quantity: "",
      weight: "",
      photo: null,
      serviceFee: 0,
    });
    setSelectedService("");
  }, [selectedProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setProductDetails({ ...productDetails, photo: e.target.files[0] });
  };

  const handleServiceFeeClick = (service, fee) => {
    setProductDetails({ ...productDetails, serviceFee: fee });
    setSelectedService(service);
  };

  const handleNextClick = () => {
    setShowPaymentModal(true);
    handleClose();
  };

  const handlePaymentModalClose = () => {
    setShowPaymentModal(false);
  };

  const handlePaymentSuccess = (paymentMethod) => {
    console.log("Payment method selected:", paymentMethod);
    // Handle successful payment method selection here
  };

  return (
    <>
      <Modal show={showBarangModal} onHide={handleClose} dialogClassName={styles.customModal}>
        <Modal.Header closeButton>
          <Modal.Title>Pilih Detail Barang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="description">
              <Form.Label className={styles['form-label-small']}>Deskripsi {selectedProduct.type}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Deskripsi ${selectedProduct.type}`}
                name="description"
                onChange={handleInputChange}
                value={productDetails.description}
                className={styles['form-control-small']}
              />
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label className={styles['form-label-small']}>Jumlah {selectedProduct.type} (pcs)</Form.Label>
              <Form.Control
                type="number"
                placeholder={`Jumlah ${selectedProduct.type} `}
                name="quantity"
                onChange={handleInputChange}
                value={productDetails.quantity}
                className={styles['form-control-small']}
              />
            </Form.Group>
            <Form.Group controlId="weight">
              <Form.Label className={styles['form-label-small']}>Berat (kg)</Form.Label>
              <Form.Control
                type="number"
                placeholder={`Berat ${selectedProduct.type}`}
                name="weight"
                onChange={handleInputChange}
                value={productDetails.weight}
                className={styles['form-control-small']}
              />
            </Form.Group>
            <Form.Group controlId="photo">
              <Form.Label className={styles['form-label-small']}>Unggah Foto</Form.Label>
              <Form.Control
                type="file"
                name="photo"
                onChange={handleFileChange}
                className={styles['form-control-small']}
              />
            </Form.Group>
          </Form>
          <div className={styles["button-container"]}>
            <button
              className={`${styles["image-button"]} ${selectedService === "Sicepat" ? styles["selected"] : ""}`}
              onClick={() => handleServiceFeeClick("Sicepat", 35000)}
            >
              <img src={Sicepat} alt="Sicepat" />
            </button>
            <button
              className={`${styles["image-button"]} ${selectedService === "JNT" ? styles["selected"] : ""}`}
              onClick={() => handleServiceFeeClick("JNT", 40000)}
            >
              <img src={JNT} alt="JNT" />
            </button>
            <button
              className={`${styles["image-button"]} ${selectedService === "JNE" ? styles["selected"] : ""}`}
              onClick={() => handleServiceFeeClick("JNE", 20000)}
            >
              <img src={JNE} alt="JNE" />
            </button>
          </div>
          {productDetails.serviceFee > 0 && (
            <div className={styles['service-fee']}>
              <p>Biaya Ongkir: Rp. {productDetails.serviceFee.toLocaleString('id-ID')}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleNextClick} className={styles["stylebutton"]}>
            Pilih Jenis Pembayaran
          </Button>
        </Modal.Footer>
      </Modal>

      <ModalPembayaranBarang
      showModal={showPaymentModal}
      handleClose={handlePaymentModalClose}
      serviceFee={productDetails.serviceFee}
      onSuccess={handlePaymentSuccess}
      formData={productDetails} 
      description={productDetails.description}
      quantity={productDetails.quantity} 
      />
    </>
  );
};

export default ModalBarang;


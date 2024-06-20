import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from './PopUpPemilihanBarang.module.css';
import SuccessModalBarang from '../../components/PopUpPemilihanBarang/SuccessModalBarang';
import BuktiPembayaranBarang from '../../components/ModalBuktiPembayaran/BuktiPembayaranBarang';

const ModalPembayaranBarang = ({ showModal, handleClose, donationAmount = 2500, serviceFee = 0, onSuccess, selectedProduct, description, quantity }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const buktiMethods = [
    { id: 1, name: 'GoPay', image: 'src/assets/logos/GoPay.png', title: 'E-Wallet' },
    { id: 2, name: 'Dana', image: '/src/assets/logos/Dana.png', title: 'E-Wallet' },
    { id: 3, name: 'BRIVA', image: '/src/assets/logos/BRIVA.png', title: 'Virtual Account' },
    { id: 4, name: 'Mandiri', image: '/src/assets/logos/Mandiri.png', title: 'Virtual Account' }
  ];

  const groupedBuktiMethods = buktiMethods.reduce((acc, method) => {
    if (!acc[method.title]) {
      acc[method.title] = [];
    }
    acc[method.title].push(method);
    return acc;
  }, {});

  const totalAmount = parseInt(donationAmount) + parseInt(serviceFee);

  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleDonasiClick = () => {
    onSuccess(selectedPaymentMethod);
    setShowSuccessModal(true);
    handleClose();
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
  };

  useEffect(() => {
    // Reset the selected payment method when the modal is reopened
    setSelectedPaymentMethod("");
  }, [showModal]);

  return (
    <div className={styles.bodyPembayaranUang}>
      <Modal show={showModal} onHide={handleClose} dialogClassName={styles.customModal}>
        <Modal.Header closeButton>
          <Modal.Title><b>Pilih Metode Pembayaran</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {Object.keys(groupedBuktiMethods).map(title => (
              <div key={title}>
                <h6 className={styles.paymentTitle}>{title}</h6>
                {groupedBuktiMethods[title].map(method => (
                  <div key={method.id} className={styles.paymentMethod}>
                    <Form.Check.Label className={styles.paymentLabel}>
                      <img src={method.image} alt={method.name} className={styles.paymentImage} />
                      {method.name}
                    </Form.Check.Label>
                    <Form.Check.Input 
                      type="radio" 
                      id={`payment-${method.id}`} 
                      name="paymentMethod" 
                      className={`${styles.radioInput} custom-control-input`} 
                      onChange={() => setSelectedPaymentMethod(method.name)}
                    />
                  </div>
                ))}
                <hr />
              </div>
            ))}
          </Form>
        </Modal.Body>
        <div className={styles.paymentDetails}>
          <h6 className={styles.paymentDetailsTitle}>Rincian Pembayaran</h6>
          
          <div className={`${styles.paymentAmountRight} ${styles.paymentDetailsFirst}`}>
          <p className={styles.paymentDetailsContent}>Biaya Ongkir:</p>
          <p className={styles.paymentDetailsContent}>Rp. {formatCurrency(serviceFee)}</p>
        </div>
          <div className={`${styles.paymentAmountRight} ${styles.paymentDetailsFirst}`}>
          <p className={styles.paymentDetailsContent}>Biaya Layanan:</p>
          <p className={styles.paymentDetailsContent}>Rp. {formatCurrency(donationAmount)}</p>
        </div>
        <div className={`${styles.paymentAmountRight} ${styles.paymentDetailsFirst}`}>
        <p className={styles.paymentDetailsContent}>Total:</p>
          <p className={styles.paymentDetailsContent}>Rp. {formatCurrency(totalAmount)}</p>
          </div>
        </div>
        <Modal.Footer>
          <Button className={styles.buttonPembayaran} variant="warning" onClick={handleDonasiClick} disabled={!selectedPaymentMethod}>
            Donasi
          </Button>
        </Modal.Footer>
      </Modal>
      
      <SuccessModalBarang
        showSuccessModal={showSuccessModal}
        handleSuccessClose={handleSuccessClose}
      />

      <BuktiPembayaranBarang
        showBuktiModal={showSuccessModal}
        handleBuktiModalClose={handleSuccessClose}
        formData={selectedProduct}
        donationAmount={donationAmount}
        serviceFee={serviceFee}
        description={description}
        quantity={quantity}
        paymentMethod={selectedPaymentMethod}
            />
    </div>
  );
};

export default ModalPembayaranBarang;



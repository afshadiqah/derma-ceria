import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ModalPembayaranBarang from '../../PopUpPemilihanBarang/ModalPembayaranBarang'; // Adjust the import path as needed
import SuccessModalBarang from '../../PopUpPemilihanBarang/SuccessModalBarang'; // Adjust the import path as needed

const ParentComponent = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePaymentModalClose = () => setShowPaymentModal(false);
  const handleSuccessModalClose = () => setShowSuccessModal(false);

  const handlePaymentSuccess = (paymentMethod) => {
    console.log("Selected payment method:", paymentMethod); // For debugging purposes
    setShowPaymentModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowPaymentModal(true)}>
        Donasi
      </Button>

      <ModalPembayaranBarang 
        showModal={showPaymentModal} 
        handleClose={handlePaymentModalClose} 
        serviceFee={5000} // Example service fee
        onSuccess={handlePaymentSuccess} 
      />

      <SuccessModalBarang 
        showSuccessModal={showSuccessModal} 
        handleSuccessClose={handleSuccessModalClose} 
      />
    </div>
  );
};

export default ParentComponent;

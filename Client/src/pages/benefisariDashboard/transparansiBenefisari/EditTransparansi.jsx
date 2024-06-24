import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditTransparansi = ({ showModal, handleClose, itemToEdit, handleSave }) => {
  const [anggaranProgram, setAnggaranProgram] = useState('');
  const [dokumentasi, setDokumentasi] = useState('');
  const [testimoni, setTestimoni] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setAnggaranProgram(itemToEdit.anggaran_program);
      setDokumentasi(itemToEdit.dokumentasi);
      setTestimoni(itemToEdit.testimoni);
    }
  }, [itemToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = {
      anggaran_program: anggaranProgram,
      dokumentasi,
      testimoni,
    };
    try {
      await axios.put(`http://localhost:5000/transparansi_benefisiari/${itemToEdit.id_transparansibene}`, updatedItem);
      handleSave(updatedItem); // call handleSave to refresh data
      handleClose();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Transparansi Benefisari</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formAnggaranProgram" style={{ margin: '1rem 0' }}>
            <Form.Label style={{ fontWeight: 'bold' }}>Anggaran Program</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Anggaran Program"
              value={anggaranProgram}
              onChange={(e) => setAnggaranProgram(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDokumentasi" style={{ margin: '1rem 0' }}>
            <Form.Label style={{ fontWeight: 'bold' }}>Dokumentasi</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan URL Dokumentasi"
              value={dokumentasi}
              onChange={(e) => setDokumentasi(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTestimoni" style={{ margin: '1rem 0' }}>
            <Form.Label style={{ fontWeight: 'bold' }}>Testimoni</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Masukkan Testimoni"
              value={testimoni}
              onChange={(e) => setTestimoni(e.target.value)}
              required
            />
          </Form.Group>
          <div className="button-simpan d-flex justify-content-end mt-3">
            <Button className="btn btn-warning" variant="primary" type="submit">
              Simpan
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTransparansi;

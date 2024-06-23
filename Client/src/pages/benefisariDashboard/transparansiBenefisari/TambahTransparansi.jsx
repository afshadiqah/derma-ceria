import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from 'axios';

const TambahTransparansi = ({ showModal, handleClose }) => {
  const [judul, setJudul] = useState("");
  const [testimoni, setTestimoni] = useState("");
  const [fotoTransparansi, setFotoTransparansi] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('anggaran_program', judul);
    formData.append('testimoni', testimoni);
    formData.append('dokumentasi', fotoTransparansi);

    try {
      await axios.post('http://localhost:5000/transparansi_benefesiari', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      handleClose();
    } catch (error) {
      console.error('There was an error uploading the data!', error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tambahkan Transparansi Donasi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formJudul">
            <Form.Label><b>Anggaran Program</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Nama Anggaran Program"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTestimoni">
            <Form.Label><b>Testimoni Donasi</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan testimoni"
              value={testimoni}
              onChange={(e) => setTestimoni(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formFotoTransparansi">
            <Form.Label><b>Unggah Dokumentasi</b></Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setFotoTransparansi(e.target.files[0])}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end mt-3">
            <Button variant="warning" type="submit">
              Unggah
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TambahTransparansi;

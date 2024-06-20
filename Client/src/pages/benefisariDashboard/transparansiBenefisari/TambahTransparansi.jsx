import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const TambahTransparansi = ({ showModal, handleClose }) => {
  const [judul, setJudul] = useState("");
  const [testimoni, setTestimoni] = useState(""); // Changed state variable name
  const [fotoTransparansi, setFotoTransparansi] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", judul, testimoni, fotoTransparansi);
    handleClose();
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
              onChange={(e) => setTestimoni(e.target.value)} // Fixed onChange function
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

import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const TambahKampanye = ({ showModal, handleClose }) => {
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [targetDonasi, setTargetDonasi] = useState("");
  const [fotoKampanye, setFotoKampanye] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", judul, kategori, targetDonasi, fotoKampanye);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tambahkan Kampanye Baru</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formJudul">
            <Form.Label><b>Judul Kampanye</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan judul kampanye"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formKategori">
            <Form.Label><b>Kategori Donasi</b></Form.Label>
            <Form.Control
              as="select"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              required
            >
              <option value=""><b>Pilih kategori...</b></option>
              <option value="Pendidikan">Pendidikan</option>
              <option value="Bencana">Bencana</option>
              <option value="Sosial">Sosial</option>
              <option value="Kesehatan">Kesehatan</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTargetDonasi">
            <Form.Label><b>Target Donasi (Rp)</b></Form.Label>
            <Form.Control
              type="number"
              placeholder="Masukkan target donasi"
              value={targetDonasi}
              onChange={(e) => setTargetDonasi(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formFotoKampanye">
            <Form.Label><b>Unggah Gambar Kampanye</b></Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setFotoKampanye(e.target.files[0])}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end mt-3">
            <Button variant="warning" type="submit" style={{ marginTop: "10px" }}>
              Unggah Kampanye
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TambahKampanye;

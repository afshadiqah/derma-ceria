import express from "express";
import db from "../db.js";
const router = express.Router();

router.get('/', (req, res) => {
  const query = 'SELECT * FROM donasi_barang';
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM donasi_barang WHERE id_barang = ?';
  
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

router.post('/', (req, res) => {
  const { id_user, id_detail_donasi, id_metode_pembayaran, nama_barang, jumlah, berat, pesan, jenis_barang, deskripsi_barang } = req.body;
  const query = 'INSERT INTO donasi_barang (id_user, id_detail_donasi, id_metode_pembayaran, nama_barang, jumlah, berat, pesan, jenis_barang, deskripsi_barang) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
  db.query(query, [id_user, id_detail_donasi, id_metode_pembayaran, nama_barang, jumlah, berat, pesan, jenis_barang, deskripsi_barang], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ 
      id_barang: result.insertId, 
      id_user, 
      id_detail_donasi, 
      id_metode_pembayaran, 
      nama_barang, 
      jumlah, 
      berat, 
      pesan, 
      jenis_barang, 
      deskripsi_barang 
    });
  });
});

router.put('/:id', (req, res) => {
  const { id_user, id_detail_donasi, id_metode_pembayaran, nama_barang, jumlah, berat, pesan, jenis_barang, deskripsi_barang } = req.body;
  const query = 'UPDATE donasi_barang SET id_user = ?, id_detail_donasi = ?, id_metode_pembayaran = ?, nama_barang = ?, jumlah = ?, berat = ?, pesan = ?, jenis_barang = ?, deskripsi_barang = ? WHERE id_barang = ?';
  
  db.query(query, [id_user, id_detail_donasi, id_metode_pembayaran, nama_barang, jumlah, berat, pesan, jenis_barang, deskripsi_barang, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Donasi barang updated successfully.' });
  });
});

router.delete('/:id', (req, res) => {
  const query = 'DELETE FROM donasi_barang WHERE id_barang = ?';
  
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Donasi barang deleted successfully.' });
  });
});

export default router;
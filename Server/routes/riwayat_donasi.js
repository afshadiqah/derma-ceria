import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM riwayat_donasi", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.get('/', (req, res) => {
  const query = 'SELECT * FROM riwayat_donasi';

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Endpoint untuk mendapatkan riwayat berdasarkan ID
router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM riwayat_donasi WHERE id_riwayat = ?';

  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Endpoint untuk menambahkan riwayat baru
router.post('/', (req, res) => {
  const { tanggal, jenis_donasi, jumlah, id_donasi, penerima } = req.body;
  const query = 'INSERT INTO riwayat_donasi (tanggal, jenis_donasi, jumlah, id_donasi, penerima) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [tanggal, jenis_donasi, jumlah, id_donasi, penerima], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      id_riwayat: result.insertId,
      tanggal,
      jenis_donasi,
      jumlah,
      id_donasi,
      penerima
    });
  });
});

// Endpoint untuk memperbarui riwayat berdasarkan ID
router.put('/:id', (req, res) => {
  const { tanggal, jenis_donasi, jumlah, id_donasi, penerima } = req.body;
  const query = 'UPDATE riwayat_donasi SET tanggal = ?, jenis_donasi = ?, jumlah = ?, id_donasi = ?, penerima = ? WHERE id_riwayat = ?';

  db.query(query, [tanggal, jenis_donasi, jumlah, id_donasi, penerima, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Riwayat donasi updated successfully.' });
  });
});

// Endpoint untuk menghapus riwayat berdasarkan ID
router.delete('/:id', (req, res) => {
  const query = 'DELETE FROM riwayat_donasi WHERE id_riwayat = ?';

  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Riwayat donasi deleted successfully.' });
  });
});

export default router;
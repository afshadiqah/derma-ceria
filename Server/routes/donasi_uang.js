import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM donasi_uang", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Endpoint untuk mendapatkan semua donasi uang
router.get('/', (req, res) => {
  const query = 'SELECT * FROM donasi_uang';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Endpoint untuk mendapatkan donasi uang berdasarkan ID
router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM donasi_uang WHERE id_uang = ?';
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Endpoint untuk menambahkan donasi uang baru
router.post('/', (req, res) => {
  const { id_user, pesan, id_detaildonasi, id_metode_pembayaran, jumlah_donasi, total_donasi } = req.body;
  const query = 'INSERT INTO donasi_uang (id_user, pesan, id_detaildonasi, id_metode_pembayaran, jumlah_donasi, total_donasi) VALUES (?, ?, ?, ?, ?, ?)';

  db.query(query, [id_user, pesan, id_detaildonasi, id_metode_pembayaran, jumlah_donasi, total_donasi], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      id_uang: result.insertId,
      id_user,
      pesan,
      id_detaildonasi,
      id_metode_pembayaran,
      jumlah_donasi,
      total_donasi
    });
  });
});

// Endpoint untuk memperbarui donasi uang berdasarkan ID
router.put('/:id', (req, res) => {
  const { id_user, pesan, id_detaildonasi, id_metode_pembayaran, jumlah_donasi, total_donasi } = req.body;
  const query = 'UPDATE donasi_uang SET id_user = ?, pesan = ?, id_detaildonasi = ?, id_metode_pembayaran = ?, jumlah_donasi = ?, total_donasi = ? WHERE id_uang = ?';

  db.query(query, [id_user, pesan, id_detaildonasi, id_metode_pembayaran, jumlah_donasi, total_donasi, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Donasi uang updated successfully.' });
  });
});

// Endpoint untuk menghapus donasi uang berdasarkan ID
router.delete('/:id', (req, res) => {
  const query = 'DELETE FROM donasi_uang WHERE id_uang = ?';
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Donasi uang deleted successfully.' });
  });
});

export default router;
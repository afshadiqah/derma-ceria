import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM dashboard_donatur", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Endpoint untuk mendapatkan semua data dashboard_donatur
router.get('/', (req, res) => {
    const query = 'SELECT * FROM dashboard_donatur';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });
  
  // Endpoint untuk mendapatkan data dashboard_donatur berdasarkan ID
  router.get('/:id', (req, res) => {
    const query = 'SELECT * FROM dashboard_donatur WHERE id_dashboarddonatur = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(result);
    });
  });
  
  // Endpoint untuk menambahkan data baru ke dashboard_donatur
  router.post('/', (req, res) => {
    const { id_user, tanggal, jenis_donasi, jumlah_donasi, program_donasi, penerima_donasi } = req.body;
    const query = 'INSERT INTO dashboard_donatur (id_user, tanggal, jenis_donasi, jumlah_donasi, program_donasi, penerima_donasi) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(query, [id_user, tanggal, jenis_donasi, jumlah_donasi, program_donasi, penerima_donasi], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        id_dashboarddonatur: result.insertId,
        id_user,
        tanggal,
        jenis_donasi,
        jumlah_donasi,
        program_donasi,
        penerima_donasi
      });
    });
  });
  
  // Endpoint untuk memperbarui data dashboard_donatur berdasarkan ID
  router.put('/:id', (req, res) => {
    const { id_user, tanggal, jenis_donasi, jumlah_donasi, program_donasi, penerima_donasi } = req.body;
    const query = 'UPDATE dashboard_donatur SET id_user = ?, tanggal = ?, jenis_donasi = ?, jumlah_donasi = ?, program_donasi = ?, penerima_donasi = ? WHERE id_dashboarddonatur = ?';
  
    db.query(query, [id_user, tanggal, jenis_donasi, jumlah_donasi, program_donasi, penerima_donasi, req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Data dashboard_donatur updated successfully.' });
    });
  });
  
  // Endpoint untuk menghapus data dashboard_donatur berdasarkan ID
  router.delete('/:id', (req, res) => {
    const query = 'DELETE FROM dashboard_donatur WHERE id_dashboarddonatur = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Data dashboard_donatur deleted successfully.' });
    });
  });
  
  export default router;
import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM detaildonasi", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
// Endpoint untuk mendapatkan semua detail donasi
router.get('/', (req, res) => {
    const query = 'SELECT * FROM detaildonasi';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });
  
  // Endpoint untuk mendapatkan detail donasi berdasarkan ID
  router.get('/:id', (req, res) => {
    const query = 'SELECT * FROM detaildonasi WHERE id_detaildonasi = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(result);
    });
  });
  
  // Endpoint untuk menambahkan detail donasi baru
  router.post('/', (req, res) => {
    const { detaildonasi_title, detaildonasi_pic, detaildonasi_desk, start_date } = req.body;
    const query = 'INSERT INTO detaildonasi (detaildonasi_title, detaildonasi_pic, detaildonasi_desk, start_date) VALUES (?, ?, ?, ?)';
  
    db.query(query, [detaildonasi_title, detaildonasi_pic, detaildonasi_desk, start_date], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        id_detaildonasi: result.insertId,
        detaildonasi_title,
        detaildonasi_pic,
        detaildonasi_desk,
        start_date
      });
    });
  });
  
  // Endpoint untuk memperbarui detail donasi berdasarkan ID
  router.put('/:id', (req, res) => {
    const { detaildonasi_title, detaildonasi_pic, detaildonasi_desk, start_date } = req.body;
    const query = 'UPDATE detaildonasi SET detaildonasi_title = ?, detaildonasi_pic = ?, detaildonasi_desk = ?, start_date = ? WHERE id_detaildonasi = ?';
  
    db.query(query, [detaildonasi_title, detaildonasi_pic, detaildonasi_desk, start_date, req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Detail donasi updated successfully.' });
    });
  });
  
  // Endpoint untuk menghapus detail donasi berdasarkan ID
  router.delete('/:id', (req, res) => {
    const query = 'DELETE FROM detaildonasi WHERE id_detaildonasi = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Detail donasi deleted successfully.' });
    });
  });
  
  export default router;
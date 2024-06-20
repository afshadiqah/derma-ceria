import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM metode_pembayaran", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

router.get('/', (req, res) => {
    const query = 'SELECT * FROM metode_pembayaran';
  
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });
  
router.get('/:id', (req, res) => {
    const query = 'SELECT * FROM metode_pembayaran WHERE id_metode_pembayaran = ?';
  
    db.query(query, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(result);
    });
  });
  
router.post('/', (req, res) => {
    const { nama_metode } = req.body;
    const query = 'INSERT INTO metode_pembayaran (nama_metode) VALUES (?)';
  
    db.query(query, [nama_metode], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        id_metode_pembayaran: result.insertId,
        nama_metode
      });
    });
  });
  
router.put('/:id', (req, res) => {
    const { nama_metode } = req.body;
    const query = 'UPDATE metode_pembayaran SET nama_metode = ? WHERE id_metode_pembayaran = ?';
  
    db.query(query, [nama_metode, req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Metode Pembayaran updated successfully.' });
    });
  });
  
  router.delete('/:id', (req, res) => {
    const query = 'DELETE FROM metode_pembayaran WHERE id_metode_pembayaran = ?';
  
    db.query(query, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Metode Pembayaran deleted successfully.' });
    });
  });
  
export default router;
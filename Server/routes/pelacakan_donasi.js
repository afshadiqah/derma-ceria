import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM pelacakan_donasi", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Endpoint untuk mendapatkan semua pelacakan donasi
router.get('/', (req, res) => {
  const query = 'SELECT * FROM pelacakan_donasi';

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Endpoint untuk mendapatkan pelacakan donasi berdasarkan ID
router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM pelacakan_donasi WHERE id_pelacakan = ?';

  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Endpoint untuk menambahkan pelacakan donasi baru
router.post('/', (req, res) => {
  const { id_donasi, id_user, no_tracking, date, status } = req.body;
  const query = 'INSERT INTO pelacakan_donasi (id_donasi, id_user, no_tracking, date, status) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [id_donasi, id_user, no_tracking, date, status], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      id_pelacakan: result.insertId,
      id_donasi,
      id_user,
      no_tracking,
      date,
      status
    });
  });
});

// Endpoint untuk memperbarui pelacakan donasi berdasarkan ID
router.put('/:id', (req, res) => {
  const { id_donasi, id_user, no_tracking, date, status } = req.body;
  const query = 'UPDATE pelacakan_donasi SET id_donasi = ?, id_user = ?, no_tracking = ?, date = ?, status = ? WHERE id_pelacakan = ?';

  db.query(query, [id_donasi, id_user, no_tracking, date, status, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Pelacakan donasi updated successfully.' });
  });
});

// Endpoint untuk menghapus pelacakan donasi berdasarkan ID
router.delete('//:id', (req, res) => {
  const query = 'DELETE FROM pelacakan_donasi WHERE id_pelacakan = ?';

  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Pelacakan donasi deleted successfully.' });
  });
});

export default router;

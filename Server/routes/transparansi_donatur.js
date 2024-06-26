import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM transparansi_donatur", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Endpoint untuk mendapatkan semua transparansi donasi
router.get('/', (req, res) => {
    const query = 'SELECT * FROM transparansi_donatur';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });
  
  // Endpoint untuk mendapatkan transparansi donasi berdasarkan ID
  router.get('/:id', (req, res) => {
    const query = 'SELECT * FROM transparansi_donatur WHERE id_transparansi = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(result);
    });
  });
  
  // Endpoint untuk menambahkan transparansi donasi baru
  router.post('/', (req, res) => {
    const { year, title_report, description, report_pic, testimonial_pic, name, testimonial, id_user } = req.body;
    const query = 'INSERT INTO transparansi_donatur (year, title_report, description, report_pic, testimonial_pic, name, testimonial, id_user) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
    db.query(query, [year, title_report, description, report_pic, testimonial_pic, name, testimonial, id_user], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        id_transparansi: result.insertId,
        year,
        title_report,
        description,
        report_pic,
        testimonial_pic,
        name,
        testimonial,
        id_user
      });
    });
  });
  
  // Endpoint untuk memperbarui transparansi donasi berdasarkan ID
  router.put('/:id', (req, res) => {
    const { year, title_report, description, report_pic, testimonial_pic, name, testimonial, id_user } = req.body;
    const query = 'UPDATE transparansi_donatur SET year = ?, title_report = ?, description = ?, report_pic = ?, testimonial_pic = ?, name = ?, testimonial = ?, id_user = ? WHERE id_transparansi = ?';
  
    db.query(query, [year, title_report, description, report_pic, testimonial_pic, name, testimonial, id_user, req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Transparansi donasi updated successfully.' });
    });
  });
  
  // Endpoint untuk menghapus transparansi donasi berdasarkan ID
  router.delete('/:id', (req, res) => {
    const query = 'DELETE FROM transparansi_donatur WHERE id_transparansi = ?';
    db.query(query, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Transparansi donasi deleted successfully.' });
    });
  });
  
  export default router;
import express from "express";
import db from "../db.js";
const router = express.Router();

// Endpoint untuk mendapatkan semua transparansi_benefisiari
router.get("/", (req, res) => {
  db.query("SELECT * FROM transparansi_benefisiari", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Endpoint untuk mendapatkan transparansi_benefisiari berdasarkan ID
router.get("/:id", (req, res) => {
  const query = "SELECT * FROM transparansi_benefisiari WHERE id_transparansibene = ?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Endpoint untuk menambahkan transparansi_benefisiari baru
router.post("/", (req, res) => {
  const { anggaran_program, dokumentasi, testimoni } = req.body;
  const query = `INSERT INTO transparansi_benefisiari (anggaran_program, dokumentasi, testimoni) 
                 VALUES (?, ?, ?)`;

  db.query(query, [anggaran_program, dokumentasi, testimoni], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      id_transparansibene: result.insertId,
      anggaran_program,
      dokumentasi,
      testimoni
    });
  });
});

// Endpoint untuk memperbarui transparansi_benefisiari berdasarkan ID
router.put("/:id", (req, res) => {
  const { anggaran_program, dokumentasi, testimoni } = req.body;
  const query = `UPDATE transparansi_benefisiari 
                 SET anggaran_program = ?, dokumentasi = ?, testimoni = ? 
                 WHERE id_transparansibene = ?`;

  db.query(query, [anggaran_program, dokumentasi, testimoni, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Transparansi benefisiari updated successfully." });
  });
});

// Endpoint untuk menghapus transparansi_benefisiari berdasarkan ID
router.delete("/:id", (req, res) => {
  const query = "DELETE FROM transparansi_benefisiari WHERE id_transparansibene = ?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Transparansi benefisiari deleted successfully." });
  });
});

export default router;

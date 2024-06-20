import express from "express";
import db from "../db.js";
const router = express.Router();

// Endpoint untuk mendapatkan semua brandpeduli
router.get("/", (req, res) => {
  db.query("SELECT * FROM brandpeduli", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Endpoint untuk mendapatkan brandpeduli berdasarkan ID
router.get("/:id", (req, res) => {
  const query = "SELECT * FROM brandpeduli WHERE id_brand = ?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Endpoint untuk menambahkan brandpeduli baru
router.post("/", (req, res) => {
  const { brand_name, brand_pic } = req.body;
  const query = `INSERT INTO brandpeduli (brand_name, brand_pic) 
                 VALUES (?, ?)`;

  db.query(query, [brand_name, brand_pic], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      id_brand: result.insertId,
      brand_name,
      brand_pic
    });
  });
});

// Endpoint untuk memperbarui brandpeduli berdasarkan ID
router.put("/:id", (req, res) => {
  const { brand_name, brand_pic } = req.body;
  const query = `UPDATE brandpeduli 
                 SET brand_name = ?, brand_pic = ? 
                 WHERE id_brand = ?`;

  db.query(query, [brand_name, brand_pic, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Brandpeduli updated successfully." });
  });
});

// Endpoint untuk menghapus brandpeduli berdasarkan ID
router.delete("/:id", (req, res) => {
  const query = "DELETE FROM brandpeduli WHERE id_brand = ?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Brandpeduli deleted successfully." });
  });
});

export default router;

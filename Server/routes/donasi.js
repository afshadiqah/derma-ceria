import express from "express";
import db from "../db.js";

const router = express.Router();

// Middleware untuk parsing JSON
router.use(express.json());

// Route untuk mendapatkan semua donasi
router.get("/", (req, res) => {
  db.query("SELECT * FROM donasi", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result);
    }
  });
});

// Route untuk mendapatkan donasi berdasarkan ID
router.get("/:id_donasi", (req, res) => {
  const { id_donasi } = req.params;
  db.query("SELECT * FROM donasi WHERE id_donasi = ?", [id_donasi], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else if (result.length === 0) {
      res.status(404).json({ error: "Donasi not found" });
    } else {
      res.json(result[0]);
    }
  });
});

// Route untuk menambahkan donasi baru
router.post("/", (req, res) => {
  const { id_kampanye, kategori_donasi, target_donasi, tanggal, status } = req.body;

  // Validasi input
  if (!id_kampanye || !kategori_donasi || !target_donasi || !tanggal || !status) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = "INSERT INTO donasi (id_kampanye, kategori_donasi, target_donasi, tanggal, status) VALUES (?, ?, ?, ?, ?)";
  const values = [id_kampanye, kategori_donasi, target_donasi, tanggal, status];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(201).json(result);
    }
  });
});

// Route untuk memperbarui donasi
router.put("/:id_donasi", (req, res) => {
  const { id_donasi } = req.params;
  const { id_kampanye, kategori_donasi, target_donasi, tanggal, status } = req.body;

  // Validasi input
  if (!id_kampanye || !kategori_donasi || !target_donasi || !tanggal || !status) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = "UPDATE donasi SET id_kampanye = ?, kategori_donasi = ?, target_donasi = ?, tanggal = ?, status = ? WHERE id_donasi = ?";
  const values = [id_kampanye, kategori_donasi, target_donasi, tanggal, status, id_donasi];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result);
    }
  });
});

// Route untuk menghapus donasi
router.delete("/:id_donasi", (req, res) => {
  const { id_donasi } = req.params;
  const query = "DELETE FROM donasi WHERE id_donasi = ?";

  db.query(query, [id_donasi], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result);
    }
  });
});

export default router;

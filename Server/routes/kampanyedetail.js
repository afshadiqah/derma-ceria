import express from "express";
import db from "../db.js";
const router = express.Router();

// Endpoint untuk mendapatkan semua kampanye
router.get("/", (req, res) => {
  db.query("SELECT * FROM kampanye", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Endpoint untuk mendapatkan kampanye berdasarkan ID
router.get("/:id", (req, res) => {
  const query = "SELECT * FROM kampanye WHERE id_kampanye = ?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Endpoint untuk menambahkan kampanye baru
router.post("/", (req, res) => {
  const { kampanye_title, kampanye_pic, kampanye_kategori, kampanye_desc, target, terkumpul, start_date, end_date, id_user } = req.body;
  const query = `INSERT INTO kampanye (kampanye_title, kampanye_pic, kampanye_kategori, kampanye_desc, target, terkumpul, start_date, end_date, id_user) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [kampanye_title, kampanye_pic, kampanye_kategori, kampanye_desc, target, terkumpul, start_date, end_date, id_user], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      id_kampanye: result.insertId,
      kampanye_title,
      kampanye_pic,
      kampanye_kategori,
      kampanye_desc,
      target,
      terkumpul,
      start_date,
      end_date,
      id_user
    });
  });
});

// Endpoint untuk memperbarui kampanye berdasarkan ID
router.put("/:id", (req, res) => {
  const { kampanye_title, kampanye_pic, kampanye_kategori, kampanye_desc, target, terkumpul, start_date, end_date, id_user } = req.body;
  const query = `UPDATE kampanye 
                 SET kampanye_title = ?, kampanye_pic = ?, kampanye_kategori = ?, kampanye_desc = ?, target = ?, terkumpul = ?, start_date = ?, end_date = ?, id_user = ? 
                 WHERE id_kampanye = ?`;

  db.query(query, [kampanye_title, kampanye_pic, kampanye_kategori, kampanye_desc, target, terkumpul, start_date, end_date, id_user, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Kampanye updated successfully." });
  });
});

// Endpoint untuk menghapus kampanye berdasarkan ID
router.delete("/:id", (req, res) => {
  const query = "DELETE FROM kampanye WHERE id_kampanye = ?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Kampanye deleted successfully." });
  });
});

export default router;

import express from "express";
import db from "../db.js";
import bcrypt from "bcrypt";

const router = express.Router();

// Middleware untuk parsing JSON
router.use(express.json());

// Route untuk mendapatkan semua user
router.get("/", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result);
    }
  });
});

// Route untuk mendapatkan user berdasarkan ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM user WHERE id_user = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else if (result.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json(result[0]);
    }
  });
});

// Route untuk menambahkan user baru
router.post("/", async (req, res) => {
  const { id_user, name, email, phone, username, password, role } = req.body;

  // Validasi input
  if (!name || !email || !phone || !username || !password || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO user (id_user, name, email, phone, username, password, role) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [id_user, name, email, phone, username, hashedPassword, role];

    db.query(query, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(201).json(result);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route untuk memperbarui user
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, username, password, role } = req.body;

  // Validasi input
  if (!name || !email || !phone || !username || !password || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "UPDATE user SET name = ?, email = ?, phone = ?, username = ?, password = ?, role = ? WHERE id_user = ?";
    const values = [name, email, phone, username, hashedPassword, role, id];

    db.query(query, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route untuk menghapus user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM user WHERE id_user = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(result);
    }
  });
});

export default router;

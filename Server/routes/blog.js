import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM blog", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Endpoint untuk mendapatkan item berdasarkan ID
router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM blog WHERE id_blog = ?';
  
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// end point untuk menambahkan item
router.post('/', (req, res) => {
  const { blog_title , blog_desc, blog_pic , start_date , end_date } = req.body;
  const query = 'INSERT INTO blog (blog_title , blog_desc, blog_pic , start_date , end_date) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [blog_title , blog_desc, blog_pic , start_date , end_date ], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id_blog: result.insertId, blog_title , blog_desc, blog_pic , start_date , end_date });
  });
});

// Endpoint untuk memperbarui item berdasarkan ID
router.put('/:id', (req, res) => {
  const { blog_title , blog_desc, blog_pic , start_date , end_date } = req.body;
  const query = 'UPDATE blog SET blog_title=?, blog_desc=?, blog_pic=? , start_date=? , end_date=? WHERE id_blog = ?';
  
  db.query(query, [blog_title , blog_desc, blog_pic , start_date , end_date , req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Blog updated successfully.' });
  });
});

  // Endpoint untuk menghapus blog berdasarkan ID
router.delete('/:id', (req, res) => {
  const query = 'DELETE FROM blog WHERE id_blog = ?';
  
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Blog deleted successfully.' });
  });
});

export default router;
import express from "express";
import db from "../db.js";
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM event", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

// Endpoint untuk mendapatkan item berdasarkan ID
router.get('/event/:id', (req, res) => {
  const query = 'SELECT * FROM event WHERE id_event = ?';
  
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});


// Endpoint untuk menambahkan item baru
router.post('/event', (req, res) => {
  const { event_title, event_desc, event_pic, start_date, end_date, benefit, benefit_pic } = req.body;
  const query = 'INSERT INTO event (event_title, event_desc, event_pic, start_date, end_date, benefit, benefit_pic) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  db.query(query, [event_title, event_desc, event_pic, start_date, end_date, benefit, benefit_pic], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ 
      id_event: result.insertId, 
      event_title, 
      event_desc, 
      event_pic, 
      start_date, 
      end_date, 
      benefit, 
      benefit_pic 
    });
  });
});

// Endpoint untuk memperbarui item berdasarkan ID
router.put('/event/:id', (req, res) => {
  const { event_title, event_desc, event_pic, start_date, end_date, benefit, benefit_pic } = req.body;
  const query = 'UPDATE event SET event_title = ?, event_desc = ?, event_pic = ?, start_date = ?, end_date = ?, benefit = ?, benefit_pic = ? WHERE id_event = ?';
  
  db.query(query, [event_title, event_desc, event_pic, start_date, end_date, benefit, benefit_pic, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Event updated successfully.' });
  });
});


router.delete('/event/:id', (req, res) => {
  const query = 'DELETE FROM event WHERE id_event = ?';
  
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Event deleted successfully.' });
  });
});

export default router;
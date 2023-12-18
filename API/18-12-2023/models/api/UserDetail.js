// Assuming you have the necessary setup for 'express' and 'db' configured

const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/getUserByID', (req, res) => {
    const { user_id } = req.body;

    if (!user_id) {
      return res.status(400).json({ message: 'Parameter is required' });
    }

    const getUserQuery = `SELECT * FROM quickma_users WHERE id = ?`;
    db.query(getUserQuery, [user_id], (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        if (results.length === 0) {
          res.status(404).json({ message: 'No user found with the provided ID' });
        } else {
          res.json({ user: results[0] });
        }
      }
    });
  });

  return router;
};

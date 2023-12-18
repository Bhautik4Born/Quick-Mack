const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/getUserTechnologies', (req, res) => {
    const { user_id } = req.body;

    // Check if user_id is provided
    if (!user_id) {
      return res.json({ error: 'User ID is required' });
    }

    const selectQuery = 'SELECT * FROM technology WHERE user_id = ?';
    db.query(selectQuery, [user_id], (err, results) => {
      if (err) {
        console.error('Error retrieving data:', err);
        return res.json({ error: 'Error retrieving data' });
      }

      if (results.length === 0) {
        return res.json({ error: 'No records found for the user ID' });
      }

      console.log('Data retrieved successfully!');
      res.json({ data: results });
    });
  });

  return router;
};

// UpTechnologyRoutes.js

const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/updateTechnology', (req, res) => {
    const { technology_id, technology, hours } = req.body;

    // Check if any required field is empty
    if (!technology_id || !technology || !hours) {
      return res.json({ message: 'All fields are required' });
    }

    const selectQuery = 'SELECT * FROM technology WHERE id = ?';
    db.query(selectQuery, [technology_id], (selectErr, selectResult) => {
      if (selectErr) {
        console.error('Error retrieving data:', selectErr);
        return res.json({ message: 'Error retrieving data' });
      }

      if (selectResult.length === 0) {
        return res.json({ message: 'Technology ID not found' });
      }

      const updateQuery = 'UPDATE technology SET technology = ?, hourse = ? WHERE id = ?';
      db.query(updateQuery, [technology, hours, technology_id], (updateErr, updateResult) => {
        if (updateErr) {
          console.error('Error updating data:', updateErr);
          return res.json({ message: 'Error updating data' });
        }

        console.log('Data updated successfully!');
        res.json({ message: 'Data updated successfully!' });
      });
    });
  });

  return router;
};

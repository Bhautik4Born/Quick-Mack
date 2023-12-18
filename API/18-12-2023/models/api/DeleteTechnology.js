const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/deleteTechnology', (req, res) => {
    const { technology_id } = req.body;

    // Check if technology_id is provided
    if (!technology_id) {
      return res.json({ message: 'Technology ID is required' });
    }

    const deleteQuery = 'DELETE FROM technology WHERE id = ?';
    db.query(deleteQuery, [technology_id], (err, result) => {
      if (err) {
        console.error('Error deleting data:', err);
        return res.json({ message: 'Error deleting data' });
      }

      if (result.affectedRows === 0) {
        return res.json({ message: 'Technology ID not found' });
      }

      console.log('Technology deleted successfully!');
      res.json({ message: 'Technology deleted successfully!' });
    });
  });

  return router;
};

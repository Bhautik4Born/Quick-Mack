// For '/technology' API
const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/technology', (req, res) => {
    const { user_id, technology, hours } = req.body;
    
    // Check if any required field is empty
    if (!user_id || !technology || !hours) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const insertQuery = 'INSERT INTO technology (user_id, technology, hourse) VALUES (?, ?, ?)';
    const values = [user_id, technology, hours];
  
    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error('Error Adding Technology data:', err);
        res.json({ message: 'Error Adding Technology data' });
      } else {
        console.log('Data stored successfully!');
        res.json({ message: 'Data stored successfully!' });
      }
    });
  });

  return router;
};

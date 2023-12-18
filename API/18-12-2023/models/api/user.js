const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/register', (req, res) => {
    const { username, email, mobileNumber, password } = req.body;
    
    // Check if any required field is empty
    if (!username || !email || !mobileNumber || !password) {
      return res.json({ message: 'All fields are required' });
    }

    const checkExistingQuery = `SELECT * FROM quickma_users WHERE email = ? OR mobile_number = ?`;
    db.query(checkExistingQuery, [email, mobileNumber], (err, results) => {
      if (err) {
        res.json({ error: err.message });
      } else if (results.length > 0) {
        res.json({ message: 'Email or mobile number already registered' });
      } else {
        const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!password.match(passwordRegex)) {
          res.json({
            message: 'Password must contain at least 8 characters with at least one special character, one uppercase letter, and one number'
          });
        } else {
          const insertQuery = `INSERT INTO quickma_users (username, email, mobile_number, password) VALUES (?, ?, ?, ?)`;
          db.query(insertQuery, [username, email, mobileNumber, password], (err) => {
            if (err) {
              res.json({ error: err.message });
            } else {
              res.json({ message: 'User registered successfully' });
            }
          });
        }
      }
    });
  });

  return router;
};

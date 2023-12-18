const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    
        // Check if any required field is empty
    if (!email || !password) {
      return res.json({ message: 'Email and password are required' });
    }

    const getUserQuery = `SELECT * FROM quickma_users WHERE email = ?`;
    db.query(getUserQuery, [email], (err, results) => {
      if (err) {
        res.json({ error: err.message });
      } else if (results.length === 0) {
        res.json({ message: 'Email not registered. Please register.' });
      } else {
        const user = results[0];
        if (user.password === password) {
          res.json({ message: 'Login successful' , userId: user.id});
        } else {
          res.json({ message: 'Invalid password. Please enter a valid password.' });
        }
      }
    });
  });

  return router;
};

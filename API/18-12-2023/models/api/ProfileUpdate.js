const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post('/updateUser', (req, res) => {
    const {
      user_id,
      email,
      mobile_number,
      first_name,
      last_name,
      organizations,
      address,
      state,
      zip,
      country,
      language,
      timezone,
      currency
    } = req.body;

    // Check if any required fields are missing
    if (!user_id || !email || !mobile_number || !first_name || !last_name || !organizations || !address || !state || !zip || !country || !language || !timezone || !currency) {
      return res.json({ message: 'All fields are required.' });
    }

    // Check if email or mobile number is already registered
    const checkExistingQuery = `SELECT * FROM quickma_users WHERE (email = ? OR mobile_number = ?) AND id <> ?`;
    db.query(checkExistingQuery, [email, mobile_number, user_id], (err, results) => {
      if (err) {
        return res.json({ error: err.message });
      } else if (results.length > 0) {
        return res.json({ message: 'Email or mobile number already registered. Enter another.' });
      } else {
        // Update user details
        const updateUserQuery = `UPDATE quickma_users SET 
          email = ?, 
          mobile_number = ?, 
          first_name = ?, 
          last_name = ?, 
          organizations = ?, 
          address = ?, 
          state = ?, 
          zip = ?, 
          country = ?, 
          language = ?, 
          timezone = ?, 
          currency = ? 
          WHERE id = ?`;

        db.query(
          updateUserQuery,
          [
            email,
            mobile_number,
            first_name,
            last_name,
            organizations,
            address,
            state,
            zip,
            country,
            language,
            timezone,
            currency,
            user_id
          ],
          (err) => {
            if (err) {
              return res.json({ error: err.message });
            } else {
              return res.json({ message: 'User details updated successfully' });
            }
          }
        );
      }
    });
  });

  return router;
};

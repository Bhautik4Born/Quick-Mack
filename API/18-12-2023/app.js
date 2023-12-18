const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Import the CORS package

const app = express();
app.use(cors());


// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'graphig_QuickMake',
  password: 'TvOFDI%09@fZ',
  database: 'graphig_QuickMake'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

// Middleware to parse JSON bodies
app.use(express.json());

// Pass the database User releted API LIST
const userRoutes = require('./models/api/user');
app.use('/api/user', userRoutes(db));

const LoginRoutes = require('./models/api/login');
app.use('/api/login', LoginRoutes(db));

const ProfileUpdateRoutes = require('./models/api/ProfileUpdate');
app.use('/api/ProfileUpdate', ProfileUpdateRoutes(db));

const UserDetailUpdateRoutes = require('./models/api/UserDetail');
app.use('/api/UserDetail', UserDetailUpdateRoutes(db));

// Pass the database Technology Based API LIST

const AddTechnologyUpdateRoutes = require('./models/api/AddTechnology');
app.use('/api/AddTechnology', AddTechnologyUpdateRoutes(db));

const UpTechnologyRoutes = require('./models/api/UpdateTechnology');
app.use('/api/UpdateTechnology', UpTechnologyRoutes(db));

const DeleteTechnologyRoutes = require('./models/api/DeleteTechnology');
app.use('/api/DeleteTechnology', DeleteTechnologyRoutes(db));

const UserTechnologiesRoutes = require('./models/api/UserTechnologies');
app.use('/api/UserTechnologies', UserTechnologiesRoutes(db));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = db; // Export the database connection

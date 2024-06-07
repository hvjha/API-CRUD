const express = require('express');
const app = express();
const cors = require('cors');

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Import routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

module.exports = app;

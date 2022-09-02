const express = require('express');

// Init Express app
const app = express();

// Enable Express app to receive JSON data
app.use(express.json());

// Routes
const { registrationsRouter } = require('./routes/registration.routes');

// Define endpoints
app.use('/api/v1/registrations', registrationsRouter);

// Validate if does not exist endpoint
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `URL: ${req.method} ${req.url} does not exists`,
  });
});

module.exports = { app };

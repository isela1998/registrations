const express = require('express');

// Get controllers
const {
  getAllRegistrations,
  addRegistration,
  getRegistration,
  updateRegistration,
  cancelRegistration,
} = require('../controllers/registration.controller');

// Middlewares
const { validateId } = require('../middlewares/registrations.middlewares');

const registrationsRouter = express.Router();

// Routes
registrationsRouter.get('/', getAllRegistrations);

registrationsRouter.get('/:id', validateId, getRegistration);

registrationsRouter.post('/', addRegistration);

registrationsRouter.patch('/:id', validateId, updateRegistration);

registrationsRouter.delete('/:id', validateId, cancelRegistration);

module.exports = { registrationsRouter };

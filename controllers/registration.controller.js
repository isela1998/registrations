// Get model
const { Registration } = require('../models/registration.model');

// Get all data
const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        registrations,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

// Get registration by id
const getRegistration = async (req, res) => {
  try {
    const { registration } = req;

    res.status(200).json({
      status: 'sucess',
      data: { registration },
    });
  } catch (e) {
    console.log(e);
  }
};

// Add new register
const addRegistration = async (req, res) => {
  try {
    const { entranceTime } = req.body;
    const newRegistration = await Registration.create({ entranceTime });

    res.status(201).json({
      status: 'success',
      data: { newRegistration },
    });
  } catch (e) {
    console.log(e);
  }
};

// Update exit time
const updateRegistration = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { registration } = req;

    await registration.update({ exitTime, status: 'out' });

    res.status(200).json({
      status: 'success',
      data: { registration },
    });
  } catch (e) {
    console.log(e);
  }
};

// Cancel registration
const cancelRegistration = async (req, res) => {
  try {
    const { registration } = req;

    await registration.update({ status: 'cancelled' });

    res.status(204).json({
      status: 'success',
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllRegistrations,
  addRegistration,
  getRegistration,
  updateRegistration,
  cancelRegistration,
};

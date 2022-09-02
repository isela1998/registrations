// Models
const { Registration } = require('../models/registration.model');

const validateId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    // If id doesn't found, send error message
    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found',
      });
    }

    req.registration = registration;
    next();
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  validateId,
};

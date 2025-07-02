// middleware/validateUser.js
const { body, validationResult } = require('express-validator');

exports.userValidationRules = [
  body('name')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters')
    .trim(),

  body('email')
    .isEmail().withMessage('Email must be valid')
    .normalizeEmail(),

  body('age')
    .isInt({ min: 0, max: 120 }).withMessage('Age must be a number between 0 and 120'),
];

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map(err => ({ field: err.param, message: err.msg }))
    });
  }
  next();
};


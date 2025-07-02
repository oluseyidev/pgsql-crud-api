// routes/users.js
const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');

const {
  userValidationRules,
  validate
} = require('../middleware/validateUser');

// GET all users
router.get('/', getAllUsers);

// GET user by ID
router.get('/:id', getUserById);

// POST new user
router.post('/', userValidationRules, validate, createUser);

// PUT update user
router.put('/:id', userValidationRules, validate, updateUser);

// DELETE user
router.delete('/:id', deleteUser);

module.exports = router;


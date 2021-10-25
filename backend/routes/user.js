const express = require('express');

const router = express.Router();
const Joi = require('joi');
const { ObjectId } = require('bson');

const { checkToken } = require('../middlewares/jwt-validator');

const {
  getAllUsers,
  createUser,
  getUserByEmail,
  getUserById,
  deleteUser,
  updateUser,
} = require('../controllers/user.controller');

const userValidator = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(5).required(),
    email: Joi.string().email(),
  });

  return schema.validate(user);
};

// Find All Users
router.get('/', checkToken, async (req, res, next) => {
  const users = await getAllUsers();
  res.json(users);
});

// Create User
router.post('/', async (req, res, next) => {
  const { valid } = userValidator(req.body);
  if (valid) {
    res.status(400).send(valid);
  }
  try {
    const result = await createUser(req.body);
    if (result.success) {
      res.status(201).send(result);
    } else {
      res.status(401).send(result);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// GetOne by email
router.get('/:email', checkToken, async (req, res) => {
  const { username } = req.params;
  const user = await getUserByEmail(username);
  res.json(user);
});

// GetOne by Id
router.get('/id/:id', checkToken, async (req, res) => {
  const id = ObjectId(req.params.id);
  const user = await getUserById(id);
  res.json(user);
});

// Delete user
router.delete('/:id', checkToken, async (req, res) => {
  const id = ObjectId(req.params.id);
  await deleteUser(id, res);
  res.json(`User ${req.params.id} deleted`);
});

// Update User
router.put('/:id', checkToken, async (req, res, next) => {
  const { valid } = userValidator(req.body);
  if (valid) {
    res.status(400).send(valid);
  }
  const id = ObjectId(req.params.id);

  await updateUser(id, req.body.username, req.body.password, req.body.correo);
  res.end(`User ${req.params.id} updated`);
});

module.exports = router;

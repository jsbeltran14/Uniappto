const express = require('express');

const router = express.Router();
const { checkToken } = require('../middlewares/jwt-validator');

const {
  all,
  find,
  create,
  createInhabitant,
} = require('../controllers/apartment.controller');

router.get('/', checkToken, all);

router.get('/:id', checkToken, find);

router.post('/', checkToken, create);

router.post('/:id/inhabitants', checkToken, createInhabitant);

module.exports = router;

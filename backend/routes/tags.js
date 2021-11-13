const express = require('express');

const router = express.Router();
const { checkToken } = require('../middlewares/jwt-validator');

const { all, find, create } = require('../controllers/tag.controller');

router.get('/', checkToken, all);

router.get('/:id', checkToken, find);

router.post('/', checkToken, create);

module.exports = router;

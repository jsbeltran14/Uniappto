const express = require('express');

const router = express.Router();
const { checkToken } = require('../middlewares/jwt-validator');

const { find, create } = require('../controllers/message.controller');

router.get('/:conversationId', checkToken, find);

router.post('/', checkToken, create);

module.exports = router;

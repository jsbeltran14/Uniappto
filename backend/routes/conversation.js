const express = require('express');

const router = express.Router();
const { checkToken } = require('../middlewares/jwt-validator');

const { create, find } = require('../controllers/conversation.controller');

router.post('/', checkToken, create);
router.get('/:userId', checkToken, find);

module.exports = router;

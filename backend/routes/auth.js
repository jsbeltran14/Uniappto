const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth.controller');
/**
 * Login
 */
router.post('/login', async (req, res, next) => {
  const response = await login(req.body);
  if (response.success) {
    res.status(200).send(response);
  } else {
    res.status(401).send(response);
  }
});

module.exports = router;

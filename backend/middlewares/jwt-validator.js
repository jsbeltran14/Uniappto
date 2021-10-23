const jwt = require('jsonwebtoken');

const jwtKey = process.env.JSON_TOKEN;

// Función encargada de realizar la validación del token y que es directamente consumida por server.js
const checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization;

  if (token) {
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid',
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Auth token is not supplied',
    });
  }
};

module.exports = {
  checkToken,
};

const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JSON_TOKEN;
const { getUserByEmail } = require('./user.controller');

async function login(user) {
  const { email, password } = user;

  if (email && password) {
    try {
      const currentUser = await getUserByEmail(email);
      const validation = bcryptjs.compareSync(password, currentUser.password);

      if (validation) {
        console.log('xd');
        const token = jwt.sign({ email: currentUser.email }, jwtKey, {
          expiresIn: '24h',
        });
        return {
          success: true,
          msg: 'Logged successfully',
          token,
          data: {
            username: currentUser.username,
            email: currentUser.email,
          },
        };
      }
      return {
        success: false,
        msg: 'Incorrect email and/or password',
      };
    } catch (error) {
      return {
        success: false,
        msg: 'Internal error',
      };
    }
  } else {
    return {
      success: false,
      msg: 'Incorrect username and/or password',
    };
  }
}

module.exports = { login };

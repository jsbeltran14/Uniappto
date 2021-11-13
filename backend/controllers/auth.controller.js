const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/users');

const jwtKey = process.env.JSON_TOKEN;

async function login(user) {
  const { email, password } = user;

  if (email && password) {
    try {
      const users = await UserModel.find({ email: email });
      currentUser = users[0];
      if (password === currentUser.password && email === currentUser.email) {
        const token = jwt.sign({ email: currentUser.email }, jwtKey, {
          expiresIn: '24h',
        });
        return {
          success: true,
          msg: 'Logged successfully',
          token,
          data: {
            age: currentUser.age,
            career: currentUser.career,
            email: currentUser.email,
            pic_url: currentUser.pic_url,
            username: currentUser.username,
            university: currentUser.university,
            semester: currentUser.semester,
            user_likes: currentUser.user_likes,
            liked_tags: currentUser.liked_tags,
            disliked_tags: currentUser.disliked_tags,
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

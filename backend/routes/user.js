const express = require('express');

const router = express.Router();
const { checkToken } = require('../middlewares/jwt-validator');

const {
  all,
  find,
  create,
  createDislikedTag,
  createLikedTag,
  createUserLike,
  getUserLike,
  getLikedTag,
  getDislikedTag,
  updateUser,
  getMatches,
  getUserById,
} = require('../controllers/user.controller');

router.get('/', checkToken, all);

router.get('/:id', checkToken, find);

router.put('/:id', checkToken, updateUser);

router.post('/', create);

router.post('/:id/userlikes', checkToken, createUserLike);

router.post('/:id/likedtags', checkToken, createLikedTag);

router.post('/:id/dislikedtags', checkToken, createDislikedTag);

router.get('/:id/userlikes', checkToken, getUserLike);

router.get('/:id/matches', checkToken, getMatches);

router.get('/:id/likedtags', checkToken, getLikedTag);

router.get('/:id/dislikedtags', checkToken, getDislikedTag);

module.exports = router;

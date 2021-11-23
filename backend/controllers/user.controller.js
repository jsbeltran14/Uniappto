const UserModel = require('../models/users');
const { ObjectId } = require('bson');
const bcryptjs = require('bcryptjs');

const UserController = {
  all: async (req, res) => {
    const allUsers = await UserModel.find();
    res.json(allUsers);
  },
  find: async (req, res) => {
    const found = await UserModel.find({ _id: ObjectId(req.params.id) });
    res.json(found);
  },
  findByName: async (req, res) => {
    const found = await UserModel.find({ username: req.body.username });
    res.json(found);
  },
  findByEmail: async (req, res) => {
    const found = await UserModel.find({ email: req.body.email });
    return found;
  },
  updateUser: async (req, res) => {
    const found = await UserModel.findByIdAndUpdate(ObjectId(req.params.id), {
      age: req.body.age,
      career: req.body.career,
      pic_url: req.body.pic_url,
      username: req.body.username,
      university: req.body.university,
      semester: req.body.semester,
    });
    res.json(found);
  },
  create: async (req, res) => {
    const salt = bcryptjs.genSaltSync();
    const currentUser = req.body;
    currentUser.password = bcryptjs.hashSync(currentUser.password, salt);
    const newUser = new UserModel(currentUser);
    const savedUser = await newUser.save();
    res.json(savedUser);
  },
  createLikedTag: async (req, res) => {
    const changedUser = await UserModel.findByIdAndUpdate(
      ObjectId(req.params.id),
      {
        $push: {
          liked_tags: {
            _id: req.body.liked_tag_id,
          },
        },
      },
      { new: true, useFindAndModify: false }
    );
    res.json(changedUser);
  },
  createDislikedTag: async (req, res) => {
    const changedUser = await UserModel.findByIdAndUpdate(
      ObjectId(req.params.id),
      {
        $push: {
          disliked_tags: {
            _id: req.body.disliked_tag_id,
          },
        },
      },
      { new: true, useFindAndModify: false }
    );
    res.json(changedUser);
  },
  createUserLike: async (req, res) => {
    const changedUser = await UserModel.findByIdAndUpdate(
      ObjectId(req.params.id),
      {
        $push: {
          user_likes: {
            _id: req.body.liked_user_id,
          },
        },
      },
      { new: true, useFindAndModify: false }
    );
    res.json(changedUser);
  },
  getUserLike: async (req, res) => {
    const found = await UserModel.findOne({
      _id: ObjectId(req.params.id),
    }).populate('user_likes');
    res.json(found.user_likes);
  },
  getLikedTag: async (req, res) => {
    const found = await UserModel.findOne({
      _id: ObjectId(req.params.id),
    }).populate('liked_tags');
    res.json(found.liked_tags);
  },
  getDislikedTag: async (req, res) => {
    const found = await UserModel.findOne({
      _id: ObjectId(req.params.id),
    }).populate('disliked_tags');
    res.json(found.disliked_tags);
  },
  getMatches: async (req, res) => {
    const current_user = await UserModel.findOne({
      _id: ObjectId(req.params.id),
    }).populate('user_likes');

    const user_likes = current_user.user_likes;
    const current_id = current_user._id;
    let matches = [];

    user_likes.forEach((user_like) => {
      user_like.user_likes.forEach((user) => {
        if (
          user.toString() === current_id.toString() &&
          !matches.includes(user_like)
        ) {
          matches = [...matches, user_like];
        }
      });
    });
    res.json(matches);
  },
};

module.exports = UserController;

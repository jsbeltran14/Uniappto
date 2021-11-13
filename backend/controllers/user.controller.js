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
    console.log(found);
    return found;
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
    const found = await UserModel.find({
      _id: ObjectId(req.params.id),
    }).populate('user_likes');
    res.json(found);
  },
  getLikedTag: async (req, res) => {
    const found = await UserModel.find({
      _id: ObjectId(req.params.id),
    }).populate('liked_tags');
    res.json(found);
  },
  getDislikedTag: async (req, res) => {
    const found = await UserModel.find({
      _id: ObjectId(req.params.id),
    }).populate('disliked_tags');
    res.json(found);
  },
};

module.exports = UserController;

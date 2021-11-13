const MessageModel = require('../models/message');
const { ObjectId } = require('bson');

const MessageController = {
  all: async (req, res) => {
    const allMessages = await MessageModel.find();
    res.json(allMessages);
  },
  find: async (req, res) => {
    const found = await MessageModel.find({ _id: ObjectId(req.params.id) });
    res.json(found);
  },
  create: async (req, res) => {
    const newMessage = new MessageModel(req.body);
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  },
};

module.exports = MessageController;

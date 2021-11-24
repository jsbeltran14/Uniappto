const MessageModel = require('../models/message');
const { ObjectId } = require('bson');

const MessageController = {
  find: async (req, res) => {
    const found = await MessageModel.find({
      conversationId: ObjectId(req.params.conversationId),
    });
    res.json(found);
  },
  create: async (req, res) => {
    const newMessage = new MessageModel(req.body);
    try {
      const savedMessage = await newMessage.save();
      res.status(200).json(savedMessage);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = MessageController;

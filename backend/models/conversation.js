const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ConversationSchema = new Schema(
  {
    members: { type: Array, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Conversation', ConversationSchema);

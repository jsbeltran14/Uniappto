const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  content: { type: String, required: true },
  msg_users: {
    sender_id: { type: Schema.Types.ObjectId, ref: 'User' },
    receiver_id: { type: Schema.Types.ObjectId, ref: 'User' },
  },
});

module.exports = mongoose.model('Message', MessageSchema);

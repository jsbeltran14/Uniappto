const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  age: { type: Number, required: true },
  career: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pic_url: { type: String, required: true },
  username: { type: String, required: true },
  university: { type: String, required: true },
  semester: { type: String, required: true },
  user_likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  liked_tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  disliked_tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  liked_apartments: [{ type: Schema.Types.ObjectId, ref: 'Apartment' }],
});

module.exports = mongoose.model('User', UserSchema);

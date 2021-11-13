const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TagSchema = new Schema({
  desc_name: { type: String, required: true },
  picture_url: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model('Tag', TagSchema);

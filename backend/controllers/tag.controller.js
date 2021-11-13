const TagModel = require('../models/tag');

const TagContoller = {
  all: async (req, res) => {
    const allTags = await TagModel.find();
    res.json(allTags);
  },
  find: async (req, res) => {
    const found = await TagModel.find({ desc_name: req.params.tag_name });
    res.json(found);
  },
  create: async (req, res) => {
    const newTag = new TagModel(req.body);
    const savedTag = await newTag.save();
    res.json(savedTag);
  },
};

module.exports = TagContoller;

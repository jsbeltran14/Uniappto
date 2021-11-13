const ApartmentModel = require('../models/apartment');
const { ObjectId } = require('bson');

const ApartmentController = {
  all: async (req, res) => {
    const allApts = await ApartmentModel.find();
    res.json(allApts);
  },
  find: async (req, res) => {
    const found = await ApartmentModel.find({ _id: ObjectId(req.params.id) });
    res.json(found);
  },
  create: async (req, res) => {
    const newApt = new ApartmentModel(req.body);
    const saverApt = await newApt.save();
    res.json(saverApt);
  },
  createInhabitant: async (req, res) => {
    const changedApt = await ApartmentModel.findByIdAndUpdate(
      ObjectId(req.params.id),
      {
        $push: {
          inhabitans: {
            _id: req.body.user_id,
          },
        },
      },
      { new: true, useFindAndModify: false }
    );
    res.json(changedApt);
  },
};

module.exports = ApartmentController;

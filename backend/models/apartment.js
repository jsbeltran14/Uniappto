const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ApartmentSchema = new Schema({
  address: { type: String, required: true },
  housing_type: { type: String, required: true },
  city: { type: String, required: true, maxLength: 100 },
  price: { type: Number, required: true, min: 0 },
  floor: { type: Number, required: true, min: 0 },
  contact_phone: { type: String, required: true },
  picture_url: { type: String },
  bathrooms: { type: Number, required: true, min: 1 },
  bedrooms: { type: Number, required: true, min: 0 },
  area_mtsc: { type: Number, required: true, min: 0 },
  stratum: { type: Number, required: true, min: 0 },
  zone: { type: String, required: true },
  inhabitans: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Apartment', ApartmentSchema);

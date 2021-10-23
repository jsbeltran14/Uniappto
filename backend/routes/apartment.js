const { ObjectId } = require('bson');
const express = require('express');

const router = express.Router();
const { checkToken } = require('../middlewares/jwt-validator');

const {
  findAllApartments,
  findOneApartment,
  createApartment,
  deleteApartment,
  updateApartment,
} = require('../controllers/apartment.controller');

/* FindAll apartments */
router.get('/', checkToken, async (req, res, next) => {
  const apartments = await findAllApartments();
  res.json(apartments);
});

/* FindOne apartment */
router.get('/:id', checkToken, async (req, res, next) => {
  const id = ObjectId(req.params.id);
  const apartment = await findOneApartment(id);
  res.json(apartment);
});

/* Create apartment */
router.post('/', checkToken, async (req, res, next) => {
  createApartment(req);
  res.json(`Apartment inserted`);
});

/* Update apartments */
router.put('/:id', checkToken, async (req, res, next) => {
  const id = ObjectId(req.params.id);
  updateApartment(id, req);
  res.json(`Apartment ${id} updated`);
});

/* Delete apartments */
router.delete('/:id', checkToken, async (req, res, next) => {
  const id = ObjectId(req.params.id);
  deleteApartment(id);
  res.json(`Apartment ${id.toString()} deleted`);
});

module.exports = router;

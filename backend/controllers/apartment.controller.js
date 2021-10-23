const { getDbRef } = require('../lib/mongo');

const COLLECTION_NAME = 'apartments';

const findAllApartments = async () => {
  const apartments = await getDbRef()
    .collection(COLLECTION_NAME)
    .find()
    .toArray()
    .catch((error) => console.error(error));
  return apartments;
};

const findOneApartment = async (id) => {
  const apartment = await getDbRef()
    .collection(COLLECTION_NAME)
    .find({ _id: id })
    .toArray()
    .catch((error) => console.error(error));
  return apartment;
};

const createApartment = async (req) => {
  await getDbRef()
    .collection(COLLECTION_NAME)
    .insertOne({
      direccion: req.body.direccion,
      ciudad: req.body.ciudad,
      precio: req.body.precio,
      piso: req.body.piso,
      telefono: req.body.telefono,
    })
    .catch((error) => console.error(error));
};

const deleteApartment = async (id) => {
  await getDbRef().collection(COLLECTION_NAME).deleteOne({ _id: id });
};

const updateApartment = async (id, req) => {
  await getDbRef()
    .collection(COLLECTION_NAME)
    .findOneAndUpdate(
      { _id: id },
      {
        $set: {
          direccion: req.body.direccion,
          ciudad: req.body.ciudad,
          precio: req.body.precio,
          piso: req.body.piso,
          telefono: req.body.telefono,
        },
      },
      {
        upsert: true,
      }
    )
    .catch((error) => console.error(error));
};

module.exports = {
  findAllApartments,
  findOneApartment,
  createApartment,
  deleteApartment,
  updateApartment,
};

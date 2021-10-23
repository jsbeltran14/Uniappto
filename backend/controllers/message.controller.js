const { getDbRef } = require('../lib/mongo');

const COLLECTION_NAME = 'massages';

const findAllMessages = async () => {
  const messages = await getDbRef()
    .collection(COLLECTION_NAME)
    .find()
    .toArray()
    .catch((error) => console.error(error));
  return messages;
};

const findOneMessage = async (id) => {
  const message = await getDbRef()
    .collection(COLLECTION_NAME)
    .find({ _id: id })
    .toArray()
    .catch((error) => console.error(error));
  return message;
};

const createMessage = async (req, idSender, idReceiver) => {
  await getDbRef()
    .collection(COLLECTION_NAME)
    .insertOne({
      sender: idSender,
      receiver: idReceiver,
      contenido: req.body.contenido,
      tipo: req.body.tipo,
    })
    .catch((error) => console.error(error));
};

const deleteMessage = async (id) => {
  await getDbRef().collection(COLLECTION_NAME).deleteOne({ _id: id });
};

const updateMessage = async (id, req) => {
  await getDbRef()
    .collection(COLLECTION_NAME)
    .findOneAndUpdate(
      { _id: id },
      {
        $set: {
          contenido: req.body.contenido,
          tipo: req.body.tipo,
        },
      },
      {
        upsert: true,
      }
    )
    .catch((error) => console.error(error));
};

module.exports = {
  findAllMessages,
  findOneMessage,
  createMessage,
  deleteMessage,
  updateMessage,
};

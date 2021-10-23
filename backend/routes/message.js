const { ObjectId } = require('bson');
const express = require('express');

const router = express.Router();
const { checkToken } = require('../middlewares/jwt-validator');

const {
  findAllMessages,
  findOneMessage,
  createMessage,
  deleteMessage,
  updateMessage,
} = require('../controllers/message.controller');

/* FindAll messages */
router.get('/', checkToken, async (req, res, next) => {
  const messages = await findAllMessages();
  res.json(messages);
});

/* FindOne messages */
router.get('/:id', checkToken, async (req, res, next) => {
  const id = ObjectId(req.params.id);
  const message = await findOneMessage(id);
  res.json(message);
});

/* Create messages */
router.post(
  '/sender/:idSender/receiver/:idReceiver',
  checkToken,
  async (req, res, next) => {
    const idSender = ObjectId(req.params.idUserFrom);
    const idReceiver = ObjectId(req.params.idUserTo);
    createMessage(req, idSender, idReceiver);
    res.json(`Message inserted`);
  }
);

/* Update messages */
router.put('/:id', checkToken, async (req, res, next) => {
  const id = ObjectId(req.params.id);
  updateMessage(id, req);
  res.json(`Message ${id} updated`);
});

/* Delete messages */
router.delete('/:id', checkToken, async (req, res, next) => {
  const id = ObjectId(req.params.id);
  deleteMessage(id);
  res.json(`Message ${id} deleted`);
});

module.exports = router;

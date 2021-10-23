const jwt = require('jsonwebtoken'); // TODO
const bcryptjs = require('bcryptjs');
const { getDbRef } = require('../lib/mongo');

const COLLECTION_NAME = 'users';

const jwtKey = process.env.JSON_TOKEN;

const getAllUsers = async () => {
  const users = await getDbRef()
    .collection(COLLECTION_NAME)
    .find()
    .toArray()
    .catch((error) => console.error(error));
  return users;
};

async function getUserByEmail(email) {
  const user = await getDbRef()
    .collection(COLLECTION_NAME)
    .findOne({ email: email });
  return user;
}

const emailExists = async (email) => {
  const existUser = await getUserByEmail(email);
  return existUser == null;
};

const getUserById = async (id) => {
  const user = await getDbRef()
    .collection(COLLECTION_NAME)
    .find({ _id: id })
    .toArray()
    .catch((error) => console.error(error));
  return user;
};

async function createUser(user) {
  try {
    const { username, password, email } = user;
    if (!emailExists(email)) {
      return {
        success: false,
        msg: 'User is already registered',
      };
    }

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await getDbRef().collection(COLLECTION_NAME).insertOne(user);
    const token = jwt.sign({ username, email }, jwtKey);
    return {
      success: true,
      data: {
        username,
        email,
      },
      token,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      msg: 'Internal error',
    };
  }
}

const deleteUser = async (id, res) => {
  await getDbRef()
    .collection(COLLECTION_NAME)
    .deleteOne({ _id: id })
    .catch((error) => console.error(error));
};

const updateUser = async (id, username, password, email, idApartment) => {
  await getDbRef()
    .collection(COLLECTION_NAME)
    .findOneAndUpdate(
      { _id: id },
      {
        $set: {
          username: username,
          password: password,
          email: email,
          id_apartment: idApartment,
        },
      },
      { upsert: true }
    )
    .catch((error) => console.error(error));
};

module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail,
  getUserById,
  deleteUser,
  updateUser,
};

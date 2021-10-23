const { MongoClient } = require('mongodb');

const uri = process.env.DB_HOST;
const database = process.env.DB_NAME;

let db;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async (dbName = database) => {
  const conn = await client.connect();
  db = conn.db(dbName);
  console.log(' << Database connected >> ');
};

const getDbRef = () => db || new Error('Connection error');

module.exports = { connect, getDbRef };

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.DB_HOST;
const app = express();

// middlewares
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const apartmentRouter = require('./routes/apartment');
const messageRouter = require('./routes/message');
const tagRouter = require('./routes/tags');
app.use(cors());

/* Paths */
app.use('/api', indexRouter);
app.use('/api', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/apartments', apartmentRouter);
app.use('/api/messages', messageRouter);
app.use('/api/tags', tagRouter);

module.exports = app;

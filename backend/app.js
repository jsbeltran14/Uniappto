const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

require('dotenv').config();
const { connect } = require('./lib/mongo');
connect();
const app = express();

/* Middleware */
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

/* Import Routes */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const apartmentRouter = require('./routes/apartment');
const messageRouter = require('./routes/message');

/* Middleware */
app.use(cors());

/* Paths */
app.use('/api', indexRouter);
app.use('/api', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/apartments', apartmentRouter);
app.use('/api/messages', messageRouter);

module.exports = app;
